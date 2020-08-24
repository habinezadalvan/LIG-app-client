import gql from 'graphql-tag';


export const FETCH_ME = gql`
query Me{
    me{
      userName
      email
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