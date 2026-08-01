---
title: 你的WiFi就是我的WiFi - 新百戰天龍 MacGyver 第一季 第二集 S01E02
date: 2024-05-01 21:49:30
tags: 
    - security
    - 資訊安全
    - 看電影學資安
    - drama
    - Macgyver
description: "看電影學資安：從新版馬蓋先 S01E02 的入侵劇情，介紹無線網路攻擊手法，包括 WEP 弱點、WPA/WPA2 密碼破解、WPS 與 Pixie Dust 攻擊，以及安全架設 AP 的建議。"
categories:
    - 看電影學資安
series: 看電影學資安
noticeOutdate: false
cover: /images/CyberSec-in-movie-Macgyver-S01E02/3.webp
---

各位忠實粉絲久等了，第二篇看電影學資安來囉～ (哪來的粉絲?)，這次要討論的一樣是讓某些人覺得相見不如懷念的馬蓋先，不過我還是認為此片沒大家說得那麼差啦XD 因為意外的被同事發現我在這邊寫廢文，只好認真的多寫一點技術了Orz

## Riley 是怎麼駭進秘密設施的？

為了減少劇透，我們直接快轉到我們女駭客Riley發揮的地方，馬蓋先與夥伴們要進入某秘密設施救人

![馬蓋先與夥伴們準備潛入秘密設施救人的劇照](/images/CyberSec-in-movie-Macgyver-S01E02/1.webp)

功力高強的Riley馬上就駭入該設施的網路並且獲得監視器的權限，可是她是怎麼入侵的呢？

![女駭客Riley操作筆電駭入設施網路的畫面](/images/CyberSec-in-movie-Macgyver-S01E02/2.webp)
![Riley成功取得設施監視器畫面的劇照](/images/CyberSec-in-movie-Macgyver-S01E02/3.webp)


## 靠無線訊號找目標，天線跟劉德華借的？

從無線網路訊號來判斷是否是目標的確是種方法，不過我怎麼看旁邊都只有一個建築物呀~~~

![劇中以無線網路訊號定位目標建築物的畫面](/images/CyberSec-in-movie-Macgyver-S01E02/4.webp)

難道你是跟劉德華借超大天線嗎？ (知道這梗的可能都有年紀了XD)

![Riley遠距接收目標無線網路訊號的劇照](/images/CyberSec-in-movie-Macgyver-S01E02/5.webp)

## 常見的無線網路攻擊手法

找到目標之後要怎麼對目標的無線網路進行攻擊呢？

以目前我所知比較常見的攻擊方式可以從以下的步驟來進行：

### WEP 與 WPA/WPA2 的加密弱點

可以先查看加密模式是否使用WEP(Wired Equivalent Privacy)，如果確認是WEP可以利用該加密模式的弱點：因WEP使用RC4(Rivest Cipher 4)，但是IV(Initialization Vector)過短而容易重複導致存在弱點，通常熟練的駭客可以在一個小時之內完成破解，如果加密模式使用比較安全強度比較高的模式如WPA/WPA2則無此弱點，因此必須進行密碼的猜測，通常會使用字典進行猜測，而不會使用窮舉法，相較之下成功機率就低得很多，我猜測該秘密設施就是使用WPA/WPA2才迫使Riley使用彩虹表(Rainbow Table)對密碼進行攻擊，而破解WPA/WPA2最常見的攻擊工具為Aircrack-ng

![Aircrack-ng破解無線網路密碼的操作示意動畫](/images/CyberSec-in-movie-Macgyver-S01E02/6.gif)

### WPS：PIN Code 暴力破解與 Pixie Dust

另外就是從WPS(Wi-Fi Protected Setup)進行攻擊，WPS弱點不在其演算法，而在設備廠商的疏忽，未對WPS輸入PIN Code錯誤次數進行存取限制，攻擊者只要有耐心便可以猜測或者使用暴力破解法來獲得PIN Code，運氣如果夠好可以在幾個小時之內猜得PIN Code並獲得該無線網路的存取權限，WPS另外一個弱點則是因為該設備WPS Pin Code Entropy過低的問題，利用此弱點的攻擊法稱為Pixie Dust attack，只要該AP(Access Point)存在此弱點便可在幾分鐘之內完成破解，最早的工具為pixiewps，但最新版的工具Reaver已整合一起，因此無論暴力破解或利用Pixie Dust Attack都可在Reaver完成

![Riley執行無線網路破解工具攻擊AP的畫面](/images/CyberSec-in-movie-Macgyver-S01E02/7.webp)

## Rainbow Table 可沒辦法直接重設密碼

但導演或編劇在此地方可能犯了一個錯誤，Rainbow table是無法直接對AP進行密碼重設的

![劇中宣稱用Rainbow Table重設AP密碼的橋段](/images/CyberSec-in-movie-Macgyver-S01E02/8.webp)

正確的用法應該是如同我剛才所說的方式，取得密文(Ciphertext)及其他必須的資訊之後才能利用Rainbow Table猜測可能使用的金鑰(Rainbow Table因演算法的關係通常不是可以百分之百成功)，如果取得了密碼通常也不會重設(Reset)密碼，因為會使得原本的使用者無法連線，秘密設施的壞人很容易就會發現傳說對決LAG或斷線了無線網路已經被攻擊了

![設施內人員可能察覺網路異常斷線的劇照](/images/CyberSec-in-movie-Macgyver-S01E02/9.webp)

## 那麼架設AP要注意哪些事項才能比較安全呢？

1. 不使用WEP，改使用WPA2等強度足夠的加密模式，並且使用強度足夠的密碼

2. 停用WPS，並且注意該型號是否[存在WPS弱點](https://docs.google.com/spreadsheets/d/1tSlbqVQ59kGn8hgmwcPTHUECQ3o9YhXR91A_p7Nnj5Y/edit?pref=2&pli=1#gid=2048815923)

但做足了以上的步驟只能減緩駭客的攻擊，並非可以百分之百防禦駭客，還需時常關注網路使用狀況方能將傷害降到最低

## 用56K Modem配FTP傳機密資料是哪招？

馬蓋先獲得了某種秘密資訊之後，Riley便負責傳回基地，但是………………

![Riley準備將秘密資訊傳回基地的劇照](/images/CyberSec-in-movie-Macgyver-S01E02/10.webp)
![劇中改用56K數據機撥接連線傳輸資料的畫面](/images/CyberSec-in-movie-Macgyver-S01E02/11.webp)
![螢幕顯示以FTP傳送機密檔案的操作畫面](/images/CyberSec-in-movie-Macgyver-S01E02/12.webp)

我實在是不太懂為什麼使用56K Modem為什麼可以避免電子竊聽，並且你還是使用ftp，而非使用較為安全的sftp


你也知道不安全了，還特別寫出[unsecure]…. Q_Q

![傳輸介面上標示unsecure不安全連線的特寫](/images/CyberSec-in-movie-Macgyver-S01E02/13.webp)

實在讓我搞不懂啊～～

雖然在以上幾個地方可能有點問題，但還是比我們台灣的防火牆很難入侵好，嗚嗚嗚QQ

![劇中角色談論防火牆難以入侵的劇照](/images/CyberSec-in-movie-Macgyver-S01E02/14.webp)

## 馬蓋先的弱點哲學，其實很像滲透測試

最後分享馬蓋先在打開某個門的時候說的話，其實跟滲透測試有點像：

Even the mightiest of obstacles has a weakness. It just may not be easy to identify at first glance. Or second. Or third. The trick in this line of work is to get good at spotting this weakness quickly. Then all that’s left is finding or more often building the right tool to exploit it.

![馬蓋先設法開門並道出弱點哲學台詞的劇照](/images/CyberSec-in-movie-Macgyver-S01E02/15.webp)

下次大家想看那部影片呢，歡迎大家到ISDA的粉絲團告訴我們～ 或與我們討論，我們下次見囉 (揮手