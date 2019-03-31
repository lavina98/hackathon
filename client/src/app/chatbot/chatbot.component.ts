import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChatbotService } from '../shared/services/chatbot.service';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  // arr: Array<object>;
  arr = [];
  app = {};
  chatbotForm: FormGroup;
  email = 'mihirnd@gmail.com';
  // app.sendMessage = this.SendMessage;
  // myId = 'parth';
  // array = [['sid', 'Hello'], ['sid', 'Hi'], ['Mihir', 'Are You There ?']];

  constructor(private fb: FormBuilder, private chatbotService: ChatbotService) {
    this.chatbotForm = fb.group({
      text: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }






  addMessage() {
    const obj = { email: this.email, text: this.chatbotForm.value.text, right: true };
    this.arr.push(obj);
    console.log(this.chatbotForm.value.text);
    const text1 = this.chatbotForm.value.text;
    this.chatbotForm.setValue({ text: '' });
    this.chatbotService.getAnswer(text1).subscribe(
      res => {
        console.log(res);
        if (res === 'Less') {
          this.arr.push({ text: 'Please enter a different query' });
        } else {
          this.arr.push({text:res[0].description , right:false});
          this.arr.push({text:res[1].description , right:false});
          this.arr.push({text:res[2].description , right:false});

        }
      }

    );
  }

  // SendMessage() {
  //   const message = document.getElementById('messageBySender').value;
  //   const temp = [this.myId, message];
  //   this.array.push(temp);
  //   document.getElementById('messageBySender').value = '';
  //   console.log(this.array);
  //   this.reload();
  // }

  // reload() {
  //   const table = document.getElementById('chatsWithBot');
  //   const tablelength = table.rows.length;
  //   let i = 0;
  //   for (i = 0; i < tablelength; i++) {
  //     table.deleteRow(0);
  //   }
  //   var count = 0;
  //   for (var msg in this.array) {
  //     var row = table.insertRow(count);
  //     count++;
  //     var cell1 = row.insertCell(0);
  //     var chat = array[msg];
  //     // console.log(chat['msgText']);
  //     cell1.innerHTML = '<span><b>' + chat[0] + '</b></span><br>' + chat[1];
  //     if (chat[0] === myId) {
  //       cell1.align = 'right';
  //     }
  //     else {
  //       cell1.align = 'left';
  //     }
  //   }
  // }

  // reload();
  //   );
}
