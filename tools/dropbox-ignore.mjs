// 讓 Dropbox 忽略建置產物與依賴目錄，避免同步鎖檔（EBUSY）與浪費空間。
// hexo clean 會刪掉 public，重新產生後標記會消失，因此 deploy 流程中需再次執行。
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const targets = ['public', 'db.json', '.deploy_git', 'node_modules'];

for (const target of targets) {
  if (!existsSync(target)) continue;
  try {
    if (process.platform === 'win32') {
      execFileSync('powershell', [
        '-NoProfile', '-Command',
        `Set-Content -Path '${target}' -Stream com.dropbox.ignored -Value 1`,
      ], { stdio: 'ignore' });
    } else if (process.platform === 'darwin') {
      execFileSync('xattr', ['-w', 'com.dropbox.ignored', '1', target], { stdio: 'ignore' });
    } else {
      execFileSync('attr', ['-s', 'com.dropbox.ignored', '-V', '1', target], { stdio: 'ignore' });
    }
    console.log(`dropbox-ignore: ${target}`);
  } catch {
    // 標記失敗不應中斷部署流程
  }
}
