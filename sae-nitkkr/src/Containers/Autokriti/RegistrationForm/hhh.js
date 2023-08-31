<html>
    <style>
        button:active {
            background-color: yellow;
        }
        .flexMeRow {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .flexMeCol {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .flexMeCenter {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>
    <body>
        <div class="flexMeCenter">
            <div class="flexMeCol">
                <div class="flexMeRow"><button type="submit" form="forward" id="control4">FORWARD</button></div>
                <div class="flexMeRow">
                    <form action="/left" method="get" id="left"></form>
                    <form action="/right" method="get" id="right"></form>
                    <form action="/forward" method="get" id="forward"></form>
                    <form action="/back" method="get" id="back"></form>
                    <form action="/stop" method="get" id="stop"></form>
                    <button form="left" type="submit" id="control2">LEFT</button> <button form="stop" type="submit" id="stop">STOP</button> <button form="right" type="submit" id="control1">RIGHT</button>
                </div>
                <div class="flexMeRow"><button form="back" type="submit" id="control3">BACK</button></div>
            </div>
            <br />
            <br />
            <div class="flexMeRow">
                <label for="vol">Throttle (between 0 and 100):</label> <input type='range' id='points' onchange='myfunction()' name='Speed controller' min='0' max='100' value='' + String(throttle) + '' form='speed' />
                <form action="/speed" method="get" id="speed"><!-- <div id='sendSpeed' value='inputVal()'></div> --></form>
                <div id="throttleValue"></div>
                <button type="submit" form="speed" id="speedButt" style="display: none;"></button>
            </div>
        </div>
    </body>
    <script>
        function myfunction() {
            var input = document.getElementById("points");
            var speedButt = document.getElementById("speedButt");
            var speed = document.getElementById("speed");
            speed.action = "/speed?par1=hi";
            speedButt.click();
            console.log(input.value);
            getvalue();
            speedButt.click();
        }
        function inputVal() {
            var input = document.getElementById("points");
            console.log(input.value + "right");
            return input.value;
        }
        function getvalue() {
            var value = document.getElementById("throttleValue");
            var input = document.getElementById("points");
            value.innerHTML = input.value;
        }
        getvalue();
    </script>
</html>
