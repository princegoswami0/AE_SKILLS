#include<iostream>
using namespace std;

int main (){
  // int n = 10 ;
  // int evenSum = 0;

  // for ( int i=1; i<=n; i++){
  //   if ( i%2==0){
  //     evenSum += i ;
  //   }
  // }

  // cout << evenSum;


  int n = 10;
  int i = 2;
  int evnSum = 0;

  while (i<=n){
    evnSum += i;
    i+2;
  }
  cout << evnSum;
  return 0 ;
}