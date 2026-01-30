#include<iostream>
using namespace std;

int main(){
  // 
  
  //factorial of a number n ;

  int n ;
  cout<<"enter the number n ";
  cin>>n;

  int fact = 1;

  for(int i=1; i<=n; i++){
    fact*=i;
  }

  cout<<fact;
  return 0;
}