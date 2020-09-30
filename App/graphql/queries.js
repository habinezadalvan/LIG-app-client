import gql from 'graphql-tag';


export const FETCH_ME = gql`
query Me{
    me{
      userName
      email
      firstName
      lastName
      avatar{
        file
      }
      userRole{
        name
      }
      userReports{
        type
        title
      }
      positionStatus
      userPosition{
        name
        description
      }
      userVotes{
        count
      }
      userSavings{
        amount
      }
      userContributions{
        amount
        approved
        contributionOfMonthOf
        bankReceipt{
          file
        }
      }
    }
  }
`;


export const FETCH_ALL_USERS = gql`
query allUsers($createdAt: String){
  users(createdAt: $createdAt ){
     id
     firstName
   lastName
   accountStatus
   email
   phoneNo
   userLoans{
    amount
  }
   userEvents{
    startTime
  }
   userReports{
    title
  }
   userContributions{
    amount
  }
   userSavings{
    amount
  }
   userPosition{
     name
   }
   userRole{
     name
   }
   avatar{
     id
     file
   }
   }
 }

`