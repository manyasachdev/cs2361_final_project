"# cs2361_final_project" 

1 Introduction
My chosen project topic addresses the voting system currently in place in India. Traditionally, voting took place by means of paper ballots. Up until the 1990s, every eligible individual would have to manually mark their desired candidate on a piece of paper and then place this paper in a locked box. Once all votes had been cast, the paper ballots would all be counted one-by-one across the nation. The manual counting of individual slips of paper made the process of getting to the final tally very lengthy. Further, the simple nature of this method made it prone to attacks and fraudulent practices such as stuffing fake ballots into a box. This led to casting of fake votes with no traceable means to connect vote to voter. The late 1990s and early 2000s saw the introduction of EVMs - Electronic Voting Machines - in India. Bharat Electronics and the Electronics Corporation of India worked together to launch these in the country. EVMs were a big technological advancement for India and were highly regarded as malpractice proof due to their digital nature. Additionally, in 2019, a VVPAT - voter verified paper audit trail - system was installed in all EVMs to fix the issue of certain votes not being cast by the EVM. Voting is a direct means of exercising our democratic right. Hence, it is imperative to make efforts to make the process more secure and robust every election.


2 Project Goals
The Goal of this project is to create a secure voting platform to facilitate elections. Currently, the aim is to simply build a platform that would be good for one election. However, in time, I will attempt to restructure the application in a way such that a particular user can use this platform to contest their own small scale election. This can then be used in educational institutes, housing societies, corporates etc.


3 Plan of action
- Install Ganache from the Truffle suit to initiate a personal blockchain to be used for testing and modifying code till final deployment.
- Gradually write the smart contract to facilitate the basic function of the application - casting votes.
- Present the program, gain feedback and add additional features.
   

4 Technical Details

4.1 Backend
This application will be built on the Ethereum Blockchain. I will be using Ganache from the Truffle suite to initiate a personal blockchain for testing, subsequent modifying and initial deployment.

4.2 Smart Conract
The smart contracts will be written in solidity.

Main functions:
1. Add_Candidate() : Currently, this will be solely under the control of the admin. Candidates will be added from the backend. Hence, the function visibility will be set to private.
2. Cast_Vote() : This function allows users interacting with the front end of the application to cast their votes. Hence, the function visibility here will be set to public.

Variables:
Custom struct variable Candidate which records the candidates name, a unique identifying number and the number of votes that have been cast in favour of the candidate.

4.3 Access
I will be using the Metamask extension on Google Chrome to access the final application through the browser.


5 Benefits
This project attempts to use blockchain’s features to overcome some of the shortcomings in the current voting system. These include:
1. Anonymity in voting - In a decentralised voting application based on the blockchain, voters will have the ability to chose a candidate without any eyes on them. Votes will be mapped to a transaction id and no other identifying key. This will protect those intimidated to vote a particular way.
2. Transparent and public voting history - The blockchain is updated in plain site after every transaction. Any individual with access to the chain will be able to view every transaction, i.e. every vote cast.
3. Immutable transactions - Consensus protocol makes it hard if not impossible for hackers to gain access into the blockchain and change votes that have already been cast and recorded.


