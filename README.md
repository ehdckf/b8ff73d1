사용자 지갑 => Account



# 용어 정리

### Reality Check
* 특정국가(영국)에서 카지노, 도박 사이트 운영하려면 사용자에게 Reality Check 라는 기능을 제공해야한다. 
* Reality Check는 도박 조절을 위한 장치다. 사용자가 자신의 도박 습관을 관리하고 도박 중독을 예방하는 데 도움을 준다. 
* Reality Check는 도박 사이트에 가입한 후 설정을 통해 활성화 한다. 그러면 일정한 간격으로 팝업창이 나타나서 사용자에게 현재 사용자의 도박 활동을 확인하고 그에 대한 판단을 도울 수 있는 정보를 제공한다. 
* 이 팝업창에서는 사용자가 소비한 돈, 소요된 시간, 손실 금액 등을 보여줄 수 있다.  사용자는 이를 통해 자신의 도박 습관을 평가하고 필요한 경우 조절할 수 있다. 
* 아무튼 Reality Check는 사용자에게 도박 중독을 예방하거나 문제를 조절하는 데 도움이 된다. 


# !!!

~~혼자하는 게임이라고 seamless wallet API를 사용하는 게 아니였음~~

카지노 게임 제공 업체에서는 다음 두가지 솔루션을 제시할 수 있음
* Provider가  game + account 묶어서 제공 
* Prodiver는 game만 제공, account에 대한 관리는 Operator가 함. 

game 만 제공하는 경우에도 다음 두 가지로 나눌 수 있음
* Pragmatic Play의 API 문서 기준으로 `Seamless Wallet API` 과 `Balance Transfer API` 로 구분하여 설명

  


### Seamless Wallet

* Seamless Wallet 의 경우 Operator 와  Provider 가 실시간으로 지속적으로 통신함. 

* Pragmatic Play 의 `Seamless Wallet API`나  EvolutionGaming의 `One Wallet API`의 문서에 따라 Operator 측에서 REST API 서버를 생성하고, Provider와  REST API 를 통해 지속적으로 통신

<br>

|PragmaticPlay<br> Seamless Wallet API||EvolutionGaming<br>One Wallet API|
|:--:|:--:|:--:|
|Authenticate|사용자 확인|check|
|Balance|잔고 조회|balance|
|Bet|베팅|debit|
|Result|베팅결과|credit|
|Refund|베팅취소|cancle|
|...|기타|...|

* 장점: Operator가 모든 트랜잭션을 관리, Operator가 관리하는 Account가 매 라운드마다, 매 게임마다 실시간으로 업데이트됨.
* 단점: 지속적이고 규모가 큰 데이터의 흐름을 통해 게임이 이루어지기 때문에  Provider와  Operator의 통신상태(통신지연, 네트워크 장애)에 영향(게임 속도 저하 또는 에러)을 받음.


<br>
<br>
<br>
<br>


### Balanc Transfer
* 게임 시작할 때, 그리고 끝날 때에만 통신이 이루어짐. 
* Deposit과 Withdrawl  
* 게임 세션이 시작될 때 Provider에게 입금하고, 게임세션이 종료되면 출금
* 이탈리아의 경우 사용자가 게임을 하기 위해서 세션티켓을 구매해야함. 게임 세션은 게임 중에 전송될 금액을 명시하며 운영자와 규제기관의 통신을 위해 구성됨. 
* Provider와 Operator 두 주체만 있으면 되는 Seamless 방식과 다르게 세 번째 주체인 인증기관(규제자)를 포함하기 때문에 더 복잡
* 하지만 통신은 현금 입출금 활동(Deposit & Withdrawal) 으로 제한되어 지연 및 일시적인 네트워크 장애로 인한 영향을 덜 받는다. 
* 또한 각 거래를 검증하는 인증기관이 있어 거래를 투명하고 추적 가능하게 만들어 플레이어를 보호


### 결론

Seamless Wallet API 만 고려하면 될 것 같음. 


[Seamless vs Wallet](https://www.linkedin.com/pulse/wallet-integration-vs-seamless-comparison-between-anna-manente)




아래는 Pragmatic Paly API 

<!-- ![Transfer vs Seamless](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004190034.png) -->




# 3 Pragmatic Play SeamlessWallet API


![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled.png)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%201.png)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%202.png)


<br>
<br>
<br>
<br>


## 3.4 Authenticate

### The currency of the player is set up when the player opens a game for the first time, and the player account is created in the Pragmatic Play database, with the userId and currency received in the response on the Authentication request. <br> Important:  Currency cannot be changed after the player account is created.

<br>
<br>
<br>

## 3.6 Bet
Request path: POST /bet.html<br>
Using this method Pragmatic Play system will check the player balance on Casino Operator side to ensure they still have the funds to cover the bet. __Amount of the bet must be subtracted from player balance in Casino Operator system.__
<br>
<br>
<br>

## 3.7 Result

게임 결과가 플레이어가 이번 게임으로 얻게 된 금액(≥0) 과 함께  Operator서버로 요청됨.  <br>
Operator서버는 해당 요청을 처리한 후 플레이어 잔고를 반환.

<br>
<br>
<br>

## 3.8 BonusWin

FRB

<br>
<br>
<br>

## 3.9 JackpotWin

<br>
<br>
<br>

## 3.10 EndRound
FRB

<br>
<br>
<br>

## 3.11 Refund
[refund 기능이 있는 게임](https://www.pragmaticplay.com/en/games/big-bass-crash/?gamelang=en&cur=USD)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004120309.png)

<br>
<br>
<br>

## 3.12 GetBalancePerGame
<br>
<br>
<br>

## 3.13 PromoWin
캠페인 결과를 알려주는 API 

__campaignType__
  * Tournament
  * Community Jackpot
  * Cashback

<br>
<br>
<br>

## 3.14 SessionExpired
클라이언트가 Pragmatic Play system 세션 만료되었을때(오랫동안 활동이 없거나 게임 종료)

<br>
<br>
<br>

## 3.15 Adjustment
<br>
<br>
<br>


## 3.16 RoundDetails
<br>
<br>
<br>


# Balance Transfer API

## 4.4 CreatePlayer
 Pragmatic Play System에 player 계정 생성  =>  Pragmatic Play PalyerID 반환
<br>
<br>
<br>

## 4.5 Transfer
+는 deposit  - 는 withdrawal
<br>
<br>
<br>

## 4.6 GetTransferStatus
4.5 API transaction status 조회
<br>
<br>
<br>

## 4.7 GetBalance
Pragmatic Play System의 player balance 조회
<br>
<br>
<br>


## 4.8 StartGame
Pragmatic Play 로부터 game URL 받아오기 API

cashierURL: 플레이어 돈 없을 때 사용할 링크 
<br>
lobbyURL: mobile에서  Back to lobby 눌렀을 때 사용할 링크
<br>
<br>
<br>

## 4.9 Terminate Session
유저 세션 종료 및 모든 게임에서 강퇴







# 5 Games Javascript API

## 5.2 Event   (게임 클라이언트 ⇒ 프론트)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004152750.png)
![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004152843.png)

<br>
<br>
<br>


## 5.3 Triggers   (프론트 ⇒ 게임 클라이언트)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%204.png)

<br>
<br>
<br>

## 14.1 Custom messages  (서버 ⇒ 게임 클라이언트)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%205.png)

* 스웨덴의 경우 게임 인터페이스에서 사용자가 지금까지 배팅한 금액, 게임세션동안 승패 내역을 제공해야하는데 이를 Custom messages API 를 통해 제공


<br>
<br>
<br>


# 6 Variable Free Rounds API

## 6.3 Create Free Rounds
Free Round 만들기
<br>
얼마 이상 배팅 했을 때
<br>
<br>
<br>

## 6.4 Cancle Free Rounds
Free Round 삭제
<br>
<br>
<br>

## 6.5 GetPlayerFRB

<br>
<br>
<br>

## 6.6 Add players
## 6.7 Add player
## 6.8 Remove players
FreeRound에서 player 삭제
## 6.9 Create Player Free Rounds
특정 플레이어를 위한 Free Round 만들기

<br>
<br>
<br>


# 7 Game History API
## 7.3 GetPlayedGames
유저 게임 플레이 리스트 조회 API

## 7.4 GetGameRounds 
게임 라운드 리스트 조회  API 

## 7.5 OpenHistroy
 라운드 종료된 게임 히스트리 조회 API : URL 반환
 

## 7.6 GetRoundStatus
 게임 라운드 상태 조회 API
 <br>

## 7.7 OpenHistoryExtended 
 게임 결과 조회 API: URL 반환

<br>
<br>
<br>

# 8 Data feeds and reports

## 8.2 Game Rounds
## 8.3 In-game transactions
## 8.4 Failed Transactions
## 8.5 Active Jackpot
## 8.6 Jackpot Winners
## 8.7 Daily Totals
## 8.8 Player's incomplete Rounds
## 8.9 Cancled Rounds


<br>
<br>
<br>

# 9 Promotions API
## 9.1 Tournament Winners
## 9.2 Promo Details

<br>
<br>
<br>


# 10 Business Statistics API
## 10.2 Player daily report

<br>
<br>
<br>


# 13. Reality Check
유저가 게임에 쏟은 시간이 얼마인지 알려주는 역할
영국에서는 게임, 도박서비스를 제공하는 기업이 플레이어에게 게임 내에서 소비하는 시간을 정기적으로 알려줘야함. 

<br>
<br>
<br>


# 14.Costom messages

<br>
<br>
<br>


# 15. Regulated Markets
스웨덴, 이탈리아, 포르투갈, 남아공

* __스웨덴__ 
  * 게임 인터페이스에서 사용자가 지금까지 배팅한 금액, 게임세션동안 승패 내역을 제공해야하는데 이를 Custom messages API 를 통해 제공
* __이탈리아__ 
  *  Operator가 사용자에게 게임에 돈 얼마 쓸건지 물어봐야함. =>  total balance를 사용자에게 팝업으로 보여줘야하고, 사용자가 해당 게임에 사용할 금액을 입력해야함. 
  *  Operator가 규제자(AAMS)에 세션 전달 해야함. 
* __포르투갈__ 
  * 슬롯게임이나 기타RNG 게임에 대한 게임 결과를 자세히 알려주는 API 





<br>
<br>
<br>


# 17 빙고
모바일이랑 웹 지원
<br>

## 17.1 빙고룸
![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004161347.png)


## 17.2 OPERATOR side 빙고 API 

#### Nickname
Request path: /nickname.html<br>
seamless Wallet API 랑 비슷하게 작동

## 17.3 PROVIDER side 빙고 API

#### RoomList V2
빙고룸 리스트 불러오기 API

#### JackpotWinners
JackpotWinner 불러오기 API

#### ChangeNickname
플레이어 닉네임 변경 API

#### Bingo Player History
플레이어 빙고게임 히스토리 리스트 조회 API

#### Bingo Round History
빙고 라운드 히스토리 조회 API

## 17.4 Free ticket API

#### ActiveGameConfigs
빙고룸에 있는 게임리스트 조회 API 
<br>
Free Ticket 으로 참여 가능한지 그렇지 않은지

#### createFreeTickets
플레이어한테 FreeTicket 주기 API

#### CancelFreeTickets
free ticket 취소 API

#### ActiveFreeTickets








<br>
<br>
<br>

# 18 라이브 카지노

[라이브 카지노 데모 사이트](https://pragmatic-play-live-casino-demo.teith.io/)



프론트에서 웹소켓으로 Pragmatic Play 에서 제공하는 게임 리스트를 불러옴
![라이브 카지노 로비](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004175827.png)




Seamless Wallet API 의 __/bet.html__  __/result.html__  로 작동
<br>










