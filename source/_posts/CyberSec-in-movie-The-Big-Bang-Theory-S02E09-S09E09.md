---
title: 這才不算是入侵，因為你所有的密碼都一樣 - 宅男行不行 The Big Bang Theory S02E09, S09E09
date: 2024-05-02 01:26:21
tags: 
    - secuirty
    - 資訊安全
    - 看電影學資安
    - drama
    - The Big Bang Theory
cover: /images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/3.webp
---
嗨，大家好，我是[ISDA](https://www.isda.org.tw/)的Walter，看電影(劇)學資安又來了，這次我們來看看幽默好笑又可以學習科學詞彙的The Big Bang Theory(宅男行不行)與最近的話題韓劇魷魚遊戲，看這些劇中有什麼關於資安的部分

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/1.webp)

The Big Bang Theory劇照，圖片來源：https://paperbacks.pixnet.net/blog/post/167057184


故事是一群加州理工學院的宅男的生活，租住同一間公寓的實驗物理學家Leonard和理論物理學家Sheldon與他們朋友所發生的趣事

在第二季第九集，Leonard交到一個外科醫生女友時，Sheldon很滿意Leonard這位女友，因為身為Star Trek粉絲在他幻想中的太空探險中有個醫官麥考伊是必要的，Sheldon擔心以Leonard的交往經驗大概沒多久就會分手，因此自作主張盜用Leonard的Facebook帳號送出交往關係確認請求。在Sheldon被發現盜用帳號後嘴了一句：『那根本不算盜帳號，你每個網站都用同個密碼—Kal-El』

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/2.webp)

Leonard被Sheldon盜用Facebook帳號。圖片來源：The Big Bang Theory 宅男行不行

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/3.webp)

Sheldon反嗆你的密碼都設定同一組。圖片來源：The Big Bang Theory 宅男行不行

在第七季第七集，Leonard的另一任女友Penny想打開iPad，Leonard告訴Penny iPad密碼是Leonard的生日，雖然Penny根本不知道Leonard的生日….

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/4.webp)

Leonard告訴Penny iPad密碼。圖片來源：The Big Bang Theory 宅男行不行

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/5.webp)

密碼設定為生日的Leonard。圖片來源：The Big Bang Theory 宅男行不行

Leonard身為智商173的天才在密碼使用上卻很可惜的不算聰明，在這些例子我們發現幾個問題：

- 使用不安全的密碼：以生日當密碼不是一個好選擇，因為生日實在不算是什麼秘密，尤其是對你身邊的熟人來說
- 使用常見密碼：Kal-El雖然有符號有大小寫英文，但其實這個密碼在駭客的攻擊字典內，如果駭客要進行密碼猜測很有可能猜到
- 密碼過短：Kal-El密碼只有6碼
- 重複使用密碼：在所有的網站都使用相同密碼，駭客只要攻陷一個網站就可以偷你另外一個網站的資料 ([撞庫攻擊](https://wiki.mbalib.com/zh-tw/%E6%92%9E%E5%BA%93))

## 為什麼生日不是密碼的好選擇

* 身邊的熟人都會知道你的生日
* 想想自己的Facebook生日隱私是否設定只有自己看得到，或者是只有好友才看得到
* 好友於你的生日在Facebook上的賀詞可能為公開
* 你的慶生照片是否設定為只有好友看得到或者為公開
* 你的email地址是否包含生日，例如walter1010@gmail.com，駭客很容易猜到你的生日很有可能就是十月十日
* 其他你可能洩漏生日的地方，例如某某問卷或某某網站等，駭客可以藉由公開來源情資(Open-source intelligence, OSINT,)收集到你的資訊

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/6.webp)
成奇勳媽媽的提款卡之前是用成奇勳的生日當密碼。圖片來源：Squid Game 魷魚遊戲

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/7.webp)
成奇勳第三次終於猜到媽媽提款卡是設定自己女兒的生日。圖片來源：Squid Game 魷魚遊戲

為什麼Kal-El不是密碼的好選擇
- 列於有名駭客攻擊字典[rockyou.txt](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt)，駭客如果要進行字典攻擊法很有可能猜到
![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/8.webp)

Kal-El列於駭客字典rockyou.txt

- 長度過短，即使有大小寫英文與符號，長度過短對暴力破解都不是難事
- 密碼與自己高度相關，Leonard是超人迷，駭客一樣可以藉由公開來源情資知道你的興趣、喜歡的球隊、寵物名稱等等資訊來猜測你的密碼

## 其他密碼建議

- 長度建議：NIST建議8碼以上，但以目前計算Hash能力越來越強的情況，個人建議9碼甚至10碼以上
- 盡可能打開雙因素驗證，Google Authenticator又比手機OTP跟信箱好
- 不要使用外洩的密碼，那麼怎麼知道自己的密碼是否外洩了，可以考慮使用[haveibeenpwn](https://haveibeenpwned.com/)來查看

![](/images/CyberSec-in-movie-The-Big-Bang-Theory-S02E09-S09E09/9.webp)
email輸入haveibeenpwn後假如發現有外洩便會告知，不過walter@gmail.com 不是我的信箱(逃

* 每個網站都使用不同密碼，但這個有相當難度，所以建議使用密碼管理器
* 使用密碼管理器，至於怎麼選我們下次有機會再來討論XD

文章就先寫到這邊，如果小夥伴們對資安有興趣或者想分享電影或劇集也可以在ISDA的[Line](https://line.me/ti/g2/SNoL28VLRMkim1zj8VNP9A)或[Telegram](https://t.me/ISDATW)找到我，與我的小夥伴們一起學資安！