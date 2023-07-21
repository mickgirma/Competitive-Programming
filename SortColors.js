var sortColors = function(nums) {
    let counter0 = 0; let counter1 = 0; let counter2 = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0){
            counter0++;
        }
        else if(nums[i] == 1){
            counter1++;
        }
        else{
            counter2++;
        }
    }

    let i =0;
    while(counter0 > 0){
        nums[i++] = 0;
        counter0--;
    }

    while(counter1 > 0){
        nums[i++] = 1;
        counter1--;
    }

    while(counter2 > 0){
        nums[i++] = 2;
        counter2--;
    }

    return nums;
};
