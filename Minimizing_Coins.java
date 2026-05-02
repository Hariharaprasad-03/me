import java.util.Scanner;

class Minimizing_Coins {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int target = sc.nextInt();

        int[] nums = new int[n];

        for ( int i=0 ; i<n ; ++i) {

            nums[i] = sc.nextInt();
        }

        

        int ans = solve(nums,target);

        if (ans == Integer.MAX_VALUE){
            System.out.println(-1);
        } else {
            System.out.println(ans);
        }
    }

    public static  int solve(int[] nums , int target) {

        
        int[] dp = new int[target+1];
        for ( int i=1 ; i<=target ; ++i) {
            dp[i] = Integer.MAX_VALUE ;
        }
        dp[0] = 0 ;

        for ( int coin : nums) {

            for ( int t = coin ; t<=target ; ++t) {

                if (dp[t-coin]!= Integer.MAX_VALUE){

                    dp[t] = Math.min(dp[t],dp[t-coin]+1);
                }
            }
        }
     
        return dp[target];
    }


}