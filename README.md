# Pragmatic Play SeamlessWallet API


![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled.png)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%201.png)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%202.png)


<br>
<br>
<br>
<br>


# 3.4 Authenticate

## The currency of the player is set up when the player opens a game for the first time, and the player account is created in the Pragmatic Play database, with the userId and currency received in the response on the Authentication request. <br> Important:  Currency cannot be changed after the player account is created.

<br>
<br>
<br>

# 3.6 Bet

## Request path: POST /bet.html

Using this method Pragmatic Play system will check the player balance on Casino Operator side to ensure they still have the funds to cover the bet. __Amount of the bet must be subtracted from player balance in Casino Operator system.__

<br>
<br>
<br>

# 3.7 Result

### 게임 결과가 플레이어가 이번 게임으로 얻게 된 금액(≥0) 과 함께  nportverse 서버로 요청됨. 
nportverse 서버는 해당 요청을 처리한 후 플레이어 잔고를 반환.

<br>
<br>
<br>

# 3.8 BonusWin

FRB

<br>
<br>
<br>

# 3.9 JackpotWin

<br>
<br>
<br>

# 3.10 EndRound
FRB

<br>
<br>
<br>

# 3.11 Refund
[refund 기능이 있는 게임](https://www.pragmaticplay.com/en/games/big-bass-crash/?gamelang=en&cur=USD)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/231004120309.png)

<br>
<br>
<br>

# 3.12 GetBalancePerGame
<br>
<br>
<br>

# 3.13 PromoWin
캠페인 결과를 알려주는 API 

### campaignType
  * Tournament
  * Community Jackpot
  * Cashback

<br>
<br>
<br>

# 3.14 SessionExpired
클라이언트가 Pragmatic Play system 세션 만료되었을때(오랫동안 활동이 없거나 게임 종료)

<br>
<br>
<br>

# 3.15 Adjustment
<br>
<br>
<br>


# 3.16 RoundDetails
<br>
<br>
<br>


# 4.4 CreatePlayer
 Pragmatic Play System에 player 계정 생성  =>  Pragmatic Play PalyerID 반환
<br>
<br>
<br>

# 4.5 Transfer
+는 deposit  - 는 withdrawal
<br>
<br>
<br>

# 4.6 GetTransferStatus
4.5 API transaction status 조회
<br>
<br>
<br>

# 4.7 GetBalance
Pragmatic Play System의 player balance 조회
<br>
<br>
<br>


# 4.8 StartGame
Pragmatic Play 로부터 game URL 받아오기 API

cashierURL: 플레이어 돈 없을 때 사용할 링크
lobbyURL: mobile에서  Back to lobby 눌렀을 때 사용할 링크
<br>
<br>
<br>

# 4.9 Terminate Session
유저 세션 종료 및 모든 게임에서 강퇴









# 5.2 Event   (게임 클라이언트 ⇒ 프론트)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%203.png)

<br>
<br>
<br>


# 5.3 Triggers   (프론트 ⇒ 게임 클라이언트)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%204.png)

<br>
<br>
<br>

# 14.1 Custom messages  (서버 ⇒ 게임 클라이언트)

![Untitled](Pragmatic%20Play%20SeamlessWallet%20API%20e14ac16b169e488eb92e97776760fb5d/Untitled%205.png)

<br>
<br>
<br>



# 6.3 Create Free Rounds
Free Round 만들기
얼마 이상 배팅 했을 때, 
<br>
<br>
<br>

# 6.4 Cancle Free Rounds
Free Round 삭제
<br>
<br>
<br>

# 6.5 GetPlayerFRB

<br>
<br>
<br>

# 6.6 Add players
# 6.7 Add player
# 6.8 Remove players
FreeRound에서 player 삭제
# 6.9 Create Player Free Rounds
특정 플레이어를 위한 Free Round 만들기


<br>
<br>
<br>







