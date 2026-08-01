---
title: 防詐騙手冊：詐騙集團比演藝圈還會演，奧斯卡欠他們一座小金人
date: 2024-09-07
tags: 
    - 資訊安全
    - security
    - Social Engineer
    - 防詐騙
description: "防詐騙實用手冊：解析詐騙集團的社交工程話術，教你看懂網址結構、辨別假網站與釣魚連結，5 分鐘提升防詐能力，別再當詐騙集團的薯條。"
categories:
    - 資訊安全
cover: /images/Anti-Social-Engineer/social_engineer.jpeg
---

## 當詐騙集團比 Netflix 還會拍劇

最近新聞看多了，發現詐騙集團的演技已經超越演藝圈了。他們會**深情款款**地叫你「親愛的」，會**聲淚俱下**地說包裹出了問題，還會**激動萬分**地說有投資機會讓你日賺 5%。

奧斯卡真的欠他們一座小金人 🏆

你媽轉傳的那些「緊急通知」貼圖，搞不好就是詐騙集團的情書。今天我們要用**5 分鐘**教你提升防詐技能，讓你不再當薯條！

![詐騙集團真的欠炸](/images/Anti-Social-Engineer/欠炸.jpg)

---

## 📊 現實很骨感：為什麼詐騙越來越難分辨？

看看內政部警政署的[打詐儀表板](https://165.npa.gov.tw/#/article/1/1564)，這數字比我的存款還驚人（廢話，我存款是負的）：

![打詐儀表板數據](/images/Anti-Social-Engineer/打詐儀表板.png)

**每天好幾億的財損**！這比台灣生育率下降的速度還快 📉

### 詐騙為什麼越來越猖狂？

1. **AI 合成技術**：現在連你阿嬤的聲音都能模擬，比 Siri 還逼真
2. **個資比菜單還詳細**：你的資料在暗網流傳，比早餐店菜單還完整
3. **人性弱點**：我們都想要**快速致富**、**怕錯失機會**、**怕被罵**

---

## 心態篇：被騙不是笨，而是人性

連**金融專家**、**律師**、**醫生**都有人差點中招，所以被騙真的不是笨，而是詐騙集團太會抓人性弱點。

重點是：**被騙了要勇敢報案**！不要覺得丟臉，你的報案可能救了下一個人。

---

## 辨別網站真偽：技術篇

雖然大部分詐騙都在通訊軟體，但網站詐騙也要小心！作為資訊安全從業者，我必須告訴你：**90% 的網路詐騙都是從假網站開始的**。

## 網址結構解析：破解詐騙網站的第一課

### 完整網址結構分析

以 `https://www.walter.com.tw/images/data-lock-encryption-security.jpg` 為例：

```text
https://www.walter.com.tw/images/data-lock-encryption-security.jpg
└─┬─┘ └───────┬─────────┘ └─┬──┘ └─────────────┬────────────────┘
  │           │             │                  │
  │           │             │                  └── 檔案名稱
  │           │             └── 路徑
  │           └── 域名（最重要！）
  └── 通訊協議
```

- **通訊協議**：`https://`（有 SSL 憑證，但不代表不是詐騙）
- **域名**：`www.walter.com.tw`（**最重要！**這是判斷真偽的關鍵）
- **路徑**：`images`
- **檔案名稱**：`data-lock-encryption-security.jpg`

![網址結構示意圖](/images/Anti-Social-Engineer/url.png)

### 🔍 域名深度解析：詐騙集團最愛的陷阱

#### 域名的組成結構

```text
www.walter.com.tw
└┬┘ └──┬──┘└┬┘└┬┘
 │     │    │  └── 頂級域名 (TLD)
 │     │    └── 二級域名
 │     └── 三級域名/根域名
 └── 子域名
```

#### 詐騙集團常用的域名騙術

1. **相似域名詐騙（Typosquatting）**
   - 正版：`facebook.com`
   - 詐騙：`faceboook.com`（多一個 o）
   - 詐騙：`fecebook.com`（a 改成 e）

2. **子域名欺騙**
   - 正版：`paypal.com`
   - 詐騙：`paypal.com.security-check.net`
   - 看起來有 paypal.com，但真正的域名是 `security-check.net`

3. **同形字攻擊（Homograph Attack）**
   - 正版：`apple.com`
   - 詐騙：`аpple.com`（第一個字母是西里爾字母 а）
   - 肉眼幾乎看不出差別！

4. **假冒官方子域名**
   - 詐騙：`apple-support.verification-center.com`
   - 看起來很官方，但域名主體是 `verification-center.com`

## 🚨 判斷網站真偽的技術方法

### 方法一：瀏覽器地址欄檢查

```text
✅ 正確：https://www.paypal.com/signin
❌ 詐騙：https://paypal.signin.secure-payment.net
❌ 詐騙：https://www.paypal-security.com
❌ 詐騙：https://paypal.com.tw.verification.net
```

### 方法二：SSL 憑證檢查
點擊地址欄的🔒圖示，查看憑證資訊：
- ✅ 憑證主體應該與網站域名完全一致
- ❌ 如果憑證是發給其他域名的，絕對是詐騙

### 方法三：WHOIS 查詢
使用工具查詢域名註冊資訊：
- 註冊時間：正牌網站通常註冊很久了
- 註冊商：知名公司通常用知名註冊商
- 聯絡資訊：詐騙網站常用假資訊

## 🛡️ 瀏覽器安全設定

### Chrome 安全設定
1. 開啟「安全瀏覽」功能
2. 啟用「增強式保護」
3. 定期更新瀏覽器

### Firefox 安全設定
1. 開啟「詐騙和惡意軟體防護」
2. 啟用「DNS over HTTPS」
3. 使用嚴格的追蹤保護

### 小技巧：瀏覽器會隱藏 www

![去除www的顯示](/images/Anti-Social-Engineer/urlwithouwww.png)

有些瀏覽器會自動隱藏 `www` 前綴，這是正常的。

## ⚠️ 常見網站詐騙手法

### 1. 釣魚網站
- **特徵**：模仿知名網站外觀
- **目的**：竊取帳號密碼
- **防範**：直接輸入網址，不要點擊連結

### 2. 假購物網站
- **特徵**：價格便宜到不合理
- **目的**：騙取金錢和個資
- **防範**：查看網站評價和聯絡資訊

### 3. 假銀行網站
- **特徵**：聲稱帳戶異常需要驗證
- **目的**：竊取網銀帳密
- **防範**：永遠從官方 APP 或書籤進入

### 4. 惡意軟體下載網站
- **特徵**：假冒軟體官網
- **目的**：散布病毒木馬
- **防範**：只從官方網站下載軟體

## 🔧 進階防護工具

### 瀏覽器擴充功能
- **uBlock Origin**：阻擋惡意網站
- **Malwarebytes Browser Guard**：即時防護
- **Web of Trust (WOT)**：網站信譽評分

### 網址檢查工具
- **VirusTotal**：多引擎網址掃描
- **URLVoid**：檢查網站信譽
- **Google Safe Browsing**：Google 的安全檢查

## 💡 資安專家的建議

1. **書籤管理**：重要網站加入書籤，避免手動輸入
2. **雙重驗證**：啟用 2FA，即使密碼外洩也能保護帳戶
3. **定期檢查**：定期檢查帳戶異常活動
4. **更新習慣**：保持軟體和作業系統最新版本
5. **使用密碼管理器**：生成並儲存強密碼，避免重複使用
6. **設定 GOOGLE 暗網通知**：當你的帳號出現在暗網時，Google 會通知你

## 🎯 實戰練習：辨別真假網站

看看你能不能分辨這些網址：

```text
1. https://apple.com.security-update.net
2. https://www.paypal.com/signin
3. https://amazon-prime.checkout.com
4. https://microsoft.com.tw
```

**答案**：

- 1️⃣ ❌ 詐騙（真正域名是 security-update.net）
- 2️⃣ ✅ 正版
- 3️⃣ ❌ 詐騙（真正域名是 checkout.com）
- 4️⃣ ✅ 正版（microsoft 在台灣的官方域名）

---

## 🛠️ 實用工具推薦

1. **趨勢科技防詐達人**：LINE 官方帳號，可以檢查網址和訊息 https://www.trendmicro.com/zh_tw/forHome/products/tmc.html
2. **165 全民防騙網**：<https://165.npa.gov.tw/>
3. **詐騙撲滅計畫**：<https://fraudbuster.digiat.org.tw/anti-fraud/index?listType=N>
4. **Google監控暗網中的資料侵害事件** : 讓 google 幫你監看你的帳號密碼是否被外洩在暗網 https://myactivity.google.com/dark-web-report/dashboard
5. **whoscall**：來電辨識 APP，可以查詢來電是否為詐騙電話 https://whoscall.com/zh-hant
---

**如果這篇文章有幫到你，記得分享給親朋好友，一起對抗詐騙集團！**