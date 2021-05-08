// format number to show only k for 1000, m for 1000000
export default function NumFormatter(num) {
 
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }

}
