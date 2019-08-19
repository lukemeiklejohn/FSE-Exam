<?php  
 $message = '';  
 $error = '';  
 if(isset($_POST["submit"]))  
 {  
      
    if(file_exists('my_sneakers.json'))  
    {  
        $current_data = file_get_contents('my_sneakers.json');  
        $array_data = json_decode($current_data, true);  
        $extra = array(  
                'Brand'               =>     $_POST['Brand'],  
                'Style'          =>     $_POST["Style"],  
                'Color'     =>     $_POST["Color"]  
        );  
        $array_data[] = $extra;  
        $final_data = json_encode($array_data);  
        if(file_put_contents('my_sneakers.json', $final_data))  
        {  
                $message = "<label class='text-success'>File Appended Success fully</p>";  
        }  
    }  
    else  
    {  
        $error = 'JSON File not exits';  
    }    
 }  
 ?>