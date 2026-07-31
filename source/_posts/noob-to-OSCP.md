---
title: 從菜雞到 OSCP
date: 2024-04-30 22:35:29
tags: 
    - security
    - 資訊安全
    - OSCP
    - 證照
    - Offsec
categories:
    - 資訊安全
cover: /images/noob-to-OSCP/offsec_price_20240430.png
---

滿幸運的，一次就考到OSCP，在此感謝許多在考照過程幫助過我的人。

# OSCP簡介
Offensive Security Certified Professional([OSCP](https://www.offensive-security.com/pwk-oscp/))是一張由Offensive Security發出的實作型的資安證照，目前課程名稱為PEN-200(或稱為 Penetration Testing with Kali Linux, PWK)有別於常聽到的[CEH](https://www.eccouncil.org/programs/certified-ethical-hacker-ceh)選擇題考試(CEH Practical為實作)，OSCP全程以實作的方式進行測驗，並於實機測試後撰寫報告後繳交方能取得證照，普遍認為OSCP的能力鑑別度是優於CEH的，雖然目前在台灣可能知名度還不太夠，但以滲透測試從業人員裡面還是相當知名的。

Offensive Security Certified Professional(OSCP)PEN-200 (也就是OSCP的課程)價格最低$1649，雖然也不便宜，但考取之後不需要每年的維護費用，整體來說還是比 EC-Council 還划算，一年份的Lab需要$2599(換算台幣約8萬多)，外加兩次的測驗機會，另外值得一提的是重考的費用是$249，至於該購買那個方案就看你(或你的公司)口袋有多深，以及你是否有把握在時間內練習Lab。
2024/04/30 價目表

![](/images/noob-to-OSCP/offsec_price_20240430.png)

[課程的內容](https://www.offensive-security.com/documentation/penetration-testing-with-kali.pdf)可以說從基礎到滲透測試基本所需的知識都涵蓋了，對此證照或課程有興趣的可以先參考一下是否適合自己，繳費成功後課程開始會寄送pdf、影片與vpn設定檔與帳號密碼給你，Lab時間同時也開始計算，教材必須於時間內下載完畢，否則之後無法再下載，教材都有浮水印，照規定是不可以分享教材給其他人，否則會取消你的證照，Lab環境則是與大家共用的測試環境，目標皆是取得低權限shell與最高權限(root/system)shell與對應的flag，在某些機器攻下之後還會開放額外的網段讓你進行測試，在這部分如果將pdf的練習題與lab除了alpha, beta以外且須包含AD的機器過程10台寫下過程，考試完畢可以附上+10分，斟酌自己的時間安排是否做練習與筆記。

# 考試與報告內容
考試採取預約制，需上網排定考試時間，建議提早安排，因為較好的時段通常都會先被預約走，整體考試分成兩部分：實機測驗與報告撰寫
## 考試前
考前會需要安裝特定的瀏覽器外掛，並且需要使用WebCam，建議提早購買與安裝測試，以免在疫情嚴重的狀況下買不到WebCam，考試前兩三天會先收到登入監考環境的帳號密碼
## 考試中
考官會請你用WebCam慢速掃描你的房間四周，以及桌底下，並請你將除了考試的電腦以外的資訊設備遠離考試電腦桌，等確定都沒問題就會將考試的VPN Mail給你，然後在kali跑一下trobleshooting.sh將結果貼給他即可開始測驗，整個過程我大概花20分鐘，但這時間也包含在考試內，並不會延後20分鐘，考試的過程中是禁止使用sqlmap、Nessus、Metasploit(僅限一次，無論成功失敗)的，如果犯規可能會被取消資格，其他詳細考前注意事項可以參考這裡
OSCP實機考試的方式是在23小時45分鐘內對3+3台機器進行滲透測試，目標是拿到最高權限，滿分為100分，最低及格標準為70分，3個主機為普通權限與高權限，每台20分，也就是共60分，另外新的部分是由2個 Client 與 1個 DC 組成的 AD，但是必須完整打下才有分數，意思就是 AD 必拿，外加要拿 30分才會取得 OSCP，詳情請見[OffSec官網](https://www.offsec.com/offsec/oscp-exam-structure/)
## 報告撰寫
實機考試完畢後馬上接著24小時的報告撰寫時間，必須依照報告[要求的格式撰寫](https://www.offensive-security.com/pwk-online/PWKv1-REPORT.doc)，包含Summary以及每個步驟以及程式碼的修改部分等，如果你分數差5分可以另外補上PDF練習題與Lab練習筆記，會額外+5分，檔案名稱必須依照OSCP-學員編號-Exam-Report.pdf與.7z上傳，且檔案大小不得大於500MB與400MB，個人經驗是滿難超過大小的，上傳完畢會請你確認7z檔案的md5是否一樣，如果一樣就按下送出就等待10個工作天通知結果
OSCP報告範本

![](/images/noob-to-OSCP/OSCP_Report.png)

# 個人經驗與建議
以下為個人經驗，但不見得適合每個人，如果你已經有很豐富的滲透測試經驗，建議直接報告90天lab+考試(目前最低)即可，可以忽略以下的建議，如果你跟我一樣是小菜雞，可以考慮依照以下的方式準備考試：

- 算是對菜雞的第0步，但無法公開，有興趣的請[Telegram](https://t.me/W41T3R)私訊我或寄信給我，第一句話請簡介你是誰，並完整講清楚為什麼私訊我，如果只是打招呼會被我認為是機器人或詐騙直接黑單。
- 練習免費的[網路建議類似](https://www.abatchy.com/2017/02/oscp-like-vulnhub-vms)考試題目的練習環境，如[Vulnhub](https://www.vulnhub.com/)，測試一下自己假如不看writeup是否可以順利完成，但如果卡了一段時間發現沒有頭緒就看著writeup完成也沒關係，但建議每個步驟跟著做都必須了解原因，並且寫下自己的版本的cheatsheet與筆記。
- 練習[BufferOverflow](https://github.com/gh0x0st/Buffer_Overflow)，如Brainpan等題目，記得練習到有除了\x00\x0a\0d以外的bad chars，尋找badchars絕對是一個很重要的部分，如果可以也建議寫自己的cheatsheet，確保自己就算考試太緊張也可以按步操作就拿到分數，Buffer Overflow絕對是送分題，雖然目前已經是比較不會考，但是還是需要練習。
- 開始練習[網路建議類似](https://docs.google.com/spreadsheets/d/1dwSMIAPIam0PuRBkCiDI88pU3yzrqqHkDtBngUHNCw8/edit#gid=1839402159)考試題目，價格較低的練習環境[HackTheBox](https://www.hackthebox.eu/)，一樣依照上面Vulnhub的方式進行，個人有購買HackTheBox VIP，覺得挺划算的，個人覺得VIP已經滿足需求，不需要買到VIP+ (我沒收業配，可以自行判斷要不要付費)
- 等以上都練習熟悉了再依照口袋深度以及能力購買Lab以及考試，購買課程也建議與朋友一起購買，卡關了可以上官方的論壇看提示或者與朋友討論，記得將Lab練習的過程都記錄起來，也當作練習寫報告，未來如果考試差5分就很重要，記得一定要除了Alpah, Beta(有官方writeup，所以不算數)還要有起碼10題以上的writeup才可以
- Lab時間結束後如果仍沒信心，建議持續練習HackTheBox直到考試，或者將OSCP課程的練習與Lab10台以上寫成報告，且報告須包含 Active Directory，賺取額外的10分。

整個考試的準備過程，我個人犯的錯是在經驗不足之時沒有先練習BoF以及HackTheBox，以至於在Lab在練習的過程中因為時間不足進展得相當緩慢，因此會建議如果經驗不足的話將OSCP課程Lab擺在最後面。

考試題目以事後論來說不會太刁鑽，但有許多小陷阱(但聽之後朋友描述陷阱有減少了)，可能會讓你花許多時間，OSCP對新手或經驗不足的人來說絕對不是一張容易考取的證照，非常考驗你對滲透測試的每個細節，找到Web的弱點，也要足夠細心謹慎，從每個蛛絲馬跡如Banner、Html原始碼甚至是服務名稱找到可以利用的點，尋找可用的exploit並且仔細閱讀與修改成可正常使用(沒錯，有些exploit本身可能有些問題)，最後從常見的一些提權方式找出提權exploit來取得最高權限，個人覺得可以算從script kids中探出頭的第一步。
考試前記得要睡飽，並且準備充足的提神飲料之類的，畢竟你很有可能連續超過24小時沒有睡覺，考試的過程中如果要離開上廁所吃東西或者睡覺記得告知考官，回來也要提醒他你回來了。

# 參考網站與工具
## Windows提權
- https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite
- http://www.fuzzysecurity.com/tutorials/16.html
- https://github.com/SecWiki/windows-kernel-exploits
- https://github.com/Pwnistry/Windows-Exploit-Suggester-python3

## Linux提權
- https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite
- https://github.com/diego-treitos/linux-smart-enumeration
- https://gtfobins.github.io/
- https://blog.g0tmi1k.com/2011/08/basic-linux-privilege-escalation/

## 其他工具
每個人使用習慣不一樣，用自己習慣且不會在考試慌了手腳的最重要，也建議對常用的工具寫下cheatsheet，避免緊張而忘記下某些參數，但個人滿推薦nmapAutomator，除了nmap以外還整合了gobuster, nikito, smbmap等常見的好用工具，可以在你做Buffer Overflow的時候幫你省下許多時間

## 練習題目建議
Vulnhub
- https://www.abatchy.com/2017/02/oscp-like-vulnhub-vms

HackTheBox
- https://docs.google.com/spreadsheets/d/1dwSMIAPIam0PuRBkCiDI88pU3yzrqqHkDtBngUHNCw8/edit#gid=1839402159

最後附上官方的[準備考試建議](https://help.offsec.com/hc/en-us/articles/4547917816468-OffSec-OSCP-Exam-with-AD-Preparation#h_01FX596BX3E28R3G05Z6YSW4S5)

還有應該會比較便宜的 [DEVCORE Offensive Security 報名連結](https://docs.google.com/forms/d/e/1FAIpQLSe7-30OtKrK3DcFwXHuw9xLO9QJ18eQmlA9Q7ilwD1qYer5Fg/viewform)

其餘平台沒有練習過就不做評論，預祝你考試順利! Try Harder!
