#include<iostream>
using namespace std;

int main(){
  int n;
  cout<<"Enter the no. =";
  cin>>n;

  int totalSum=0;

  for(int i=1;i<=n;i++){
    if(i%3==0){
      totalSum+=i;
    }
  }

  cout<<totalSum<<"this is your answer";
  return 0;
}