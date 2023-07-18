class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
     let selected = i;
     for(let j=i; j<n; j++){
         if(arr[i] > arr[j])
         {selected = j;}
     }
     
     return selected;
  }

  selectionSort(arr,n){
   for(var i=0; i<n-1; i++){
       var min = i;
       
       for(let j=i+1; j<n; j++){
           if(arr[j] < arr[min]){
               min = j;
           }
       }
   var temp = arr[min];
   arr[min] = arr[i];
   arr[i] = temp;
   }
   }
  }
