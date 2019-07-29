// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");

const basicAlarm = (alarmMessage) =>
{
    return alarmMessage;
}
console.log(basicAlarm("Wake up!"));

function myAlarm(wakeup)
{
    console.log("Hey, Tare, Wake up! its, " + wakeup);
}

myAlarm("6:00am");

function momAlarm(wakeup)
{
    console.log("Mom its, "+wakeup);
}
momAlarm("4:15am")

function familyAlarm(time,member)
{
    console.log("Hey, " + member + "Wake up it's" + time);
}
 
function importantAlarm(wakeup)
{
    console.log("wake up wake up wake up")
    str.toUpperCase(wakeup);
}