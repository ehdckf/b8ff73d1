
혼자하는 게임이라고 seamless wallet API를 사용하는 게 아님. 


[Seamless vs Wallet](https://www.linkedin.com/pulse/wallet-integration-vs-seamless-comparison-between-anna-manente)



![Transfer vs Seamless](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004190034.png)




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










