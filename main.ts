input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Software Reset"
        )
        if (true) {
            let _system_Sw_ModeState__Reset__ID_INT = 0
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Give time for other stacks to complete under different concurrent 'SW_ModeState' ..."
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "... to not conflict with following LED Display"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Reset__ID_INT
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            // 1.0 too slow, 0.5 not bad, try 0.20
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(0.2, quest_Time_Units_Enum.Seconds)
        }
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        control.reset()
    }
})
function bot_Servo_Motors_Basic_Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "forward") {
        images.createImage(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        60,
        60
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "backward") {
        images.createImage(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        -60,
        -60
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "left") {
        images.createImage(`
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        50
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "right") {
        images.createImage(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        50,
        0
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "stop") {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0, 0)
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        0
        )
    }
}
function bot_Servo_Motors_Turbo_Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "forward_turbo") {
        images.createImage(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Forward-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        90,
        90
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "backward_turbo") {
        images.createImage(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Backward-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        -90,
        -90
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "left_turbo") {
        images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Left-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        80
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "right_turbo") {
        images.createImage(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Right-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        80,
        0
        )
    }
}
input.onButtonPressed(Button.A, function () {
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'"
        )
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Buttons A & B Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode"
            )
            device_Mode_Edit_GroupChannelNum_ButtonA_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Buttons A & B Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick"
            )
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
function bot_Servo_Arms__Position_Relative__Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_000__down") {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . . . #
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S7_ServoArm_Left"
            )
            servoArm_Left_Now_Degrees_Int += servoArm_Increment_Degrees_Int * -1
            servoArm_Left_Now_Degrees_Int = Math.constrain(servoArm_Left_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            servoArm_Left_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S6_ServoArm_Right"
            )
            servoArm_Right_Now_Degrees_Int += servoArm_Increment_Degrees_Int * -1
            servoArm_Right_Now_Degrees_Int = Math.constrain(servoArm_Right_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            servoArm_Right_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_045__up_half") {
        images.createImage(`
            # . . . #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S7_ServoArm_Left"
            )
            servoArm_Left_Now_Degrees_Int += servoArm_Increment_Degrees_Int * 1
            servoArm_Left_Now_Degrees_Int = Math.constrain(servoArm_Left_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            servoArm_Left_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S6_ServoArm_Right"
            )
            servoArm_Right_Now_Degrees_Int += servoArm_Increment_Degrees_Int * 1
            servoArm_Right_Now_Degrees_Int = Math.constrain(servoArm_Right_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            servoArm_Right_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
    }
}
function bot_Servo_Arms__Position_Absolute__Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_000__down") {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . . . #
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S7_ServoArm_Left"
            )
            servoArm_Left_Now_Degrees_Int += servoArm_Increment_Degrees_Int * -1
            servoArm_Left_Now_Degrees_Int = Math.constrain(servoArm_Left_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            servoArm_Left_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S6_ServoArm_Right"
            )
            servoArm_Right_Now_Degrees_Int += servoArm_Increment_Degrees_Int * -1
            servoArm_Right_Now_Degrees_Int = Math.constrain(servoArm_Right_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            servoArm_Right_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_045__up_half") {
        images.createImage(`
            # . . . #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S7_ServoArm_Left"
            )
            servoArm_Left_Now_Degrees_Int += servoArm_Increment_Degrees_Int * 1
            servoArm_Left_Now_Degrees_Int = Math.constrain(servoArm_Left_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            servoArm_Left_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S6_ServoArm_Right"
            )
            servoArm_Right_Now_Degrees_Int += servoArm_Increment_Degrees_Int * 1
            servoArm_Right_Now_Degrees_Int = Math.constrain(servoArm_Right_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            servoArm_Right_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_090__up_full") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "DISABLED: OBSOLETE"
            )
            images.createImage(`
                . # . # .
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                `).showImage(0, 0)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "If [0|360] is jittery, insure battery at 75% power min."
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
            )
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S7_ServoArm_Left"
            )
        }
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    quest_Note_1.quest_Show_String_For_Note_Big_Func(
    "Calibration Test: Servo Arms ~ Left & Right"
    )
    for (let index = 0; index <= 220; index++) {
        quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
        index,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
        quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
        index,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
    }
})
input.onButtonPressed(Button.AB, function () {
    // //jwc o if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
    if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT || _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
        // //jwc o device_Mode_Edit__GroupChannelNum__Bool = !(device_Mode_Edit__GroupChannelNum__Bool)
        // //jwc o if (!(device_Mode_Edit__GroupChannelNum__Bool)) {
        // //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        // //jwc o         "If just left 'groupChannel_Edit_Mode', then Reset 'radio set group'"
        // //jwc o     )
        // //jwc o     network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1
        // //jwc o     radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        // //jwc o } else {
        // //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        // //jwc o         "If just entered 'groupChannel_Edit_Mode':"
        // //jwc o     )
        // //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
        // //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10
        // //jwc o }
        // //jwc o network_GroupChannel_Show_Func()
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10), 1)
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value"
                )
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
            }
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        }
    } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
        let _system_Sw_ModeState__Null__ID_INT = 0
        // //jwc debug: serial.writeLine("HW_Null: SW_Null >> SW_Edit")
        // //jwc debug: serial.writeLine("HW_Null: SW_Edit >> SW_Null")
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Null__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10), 1)
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value"
                )
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
            }
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        }
    }
    if (false) {
        serial.writeLine("24-0714-2351> " + network_GroupChannel_MyBotAndController_Base0_Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int)
    }
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "Level 2.1: Variables_n_Constants_Yes"
    )
})
radio.onReceivedString(function (receivedString) {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Network_Message Received' Dual Usage:: Usage #1: Operate Bot from Controller_Joystick"
        )
        // //jwc o if (device_Type_Bot_Bool && _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
        // //jwc o } else if (!(device_Type_Bot_Bool)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            bot_Servo_Motors_Basic_Fn(receivedString)
            bot_Servo_Motors_Turbo_Fn(receivedString)
            bot_Servo_Arms__Position_Relative__Fn(receivedString)
            if (false) {
                bot_Servo_Arms__Position_Absolute__Fn(receivedString)
            }
            network__CpuCycle_Post__Management_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Network_Message Received' Dual Usage:: Usage #2: Designate this micro:bit as Bot to *Complete* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Bot:: 1of1 : 1st micro:bit Having Received a Network_Message is Designated as Device:Bot"
            )
            // //jwc o device_Type_Bot_Bool = true
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Start with 'DeviceType' Status to allow screen to stabilize & not clobber a LED for 'GroupChannelNum' Status"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            setup_BotOnly_Func()
        }
        if (true) {
            quest_Note_6.quest_Show_String_For_Note_Big_Func(
            "Level 1.0: Variables_n_Constants_Not (Hardcode) ~ Yes: 1-Sec Lag 'show leds'"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "For exclusive activation, place this 'on radio received' stack higher than other 'on radio received' stacks"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Bot Stack: Main 1of1 ~ 'on radio received(receivedString)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Network Message Max_Character_Length: 19"
            )
        }
        if (false) {
            serial.writeLine("* " + receivedString)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'"
        )
        // //jwc o if (!(device_Type_Controller_Bool) && !(device_Type_Bot_Bool)) {
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "'Buttons A & B' Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode"
            )
            device_Mode_Edit_GroupChannelNum_ButtonB_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "'Buttons A & B' Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick"
            )
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
let controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 0
let controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = 0
let controller__Polar_OriginAtCenter__IdleCount_Int = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = 0
let controller__Polar_OriginAtCenter__AngleDegree__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
let _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 0
let _system_Hw_DeviceType__Bot__ID_INT = 0
let servoArm_Right_Now_Degrees_Int = 0
let servoArm_MAX_DEGREES_INT = 0
let servoArm_MIN_DEGREES_INT = 0
let servoArm_Increment_Degrees_Int = 0
let servoArm_Left_Now_Degrees_Int = 0
let _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 0
let _system_Hw_DeviceType__Controller_Joystick__ID_INT = 0
let _system_Hw_DeviceType__Null__ID_INT = 0
let _system_Hw_DeviceType__Now__Id_Int = 0
let _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 0
let _system_Sw_ModeState__Now__Id_Int = 0
let network_GroupChannel_MyBotAndController_Base0_Int = 0
images.createImage(`
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    `).showImage(0, 0)
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Below Moddable: GroupChannel_# (Bot_Id): ..."
)
quest_Note_2.quest_Show_String_For_Note_Small_Func(
"... Range [21-255], Default = 1"
)
network_GroupChannel_MyBotAndController_Base0_Int = 1
setup_Code_For_System_Func()
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
basic.forever(function () {
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
    }
})
basic.forever(function () {
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Joystick"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            let controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 0
            if (true) {
                controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf_AsIntOut_Func(
                quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_90
                )
                controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = controller__Polar_OriginAtCenter__MagnitudePixel__Int
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func(
                )
                if (false) {
                    controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func(
                    )
                }
            }
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Convert Network Message to Operate 'B'ot: "
            )
            if (controller__Polar_OriginAtCenter__MagnitudePixel__Int > controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Big_Func(
                    "Motion: Yes"
                    )
                    if (controller__Polar_OriginAtCenter__AngleDegree__Int == 90) {
                        if (true) {
                            images.createImage(`
                                . . # . .
                                . # # # .
                                . . # . .
                                . . # . .
                                . . . . .
                                `).showImage(0, 0)
                            radio.sendString("forward")
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 270) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . . # . .
                                . . # . .
                                . # # # .
                                . . # . .
                                `).showImage(0, 0)
                            radio.sendString("backward")
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 180) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . # . . .
                                # # # # .
                                . # . . .
                                . . . . .
                                `).showImage(0, 0)
                            radio.sendString("left")
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 0 || controller__Polar_OriginAtCenter__AngleDegree__Int == 360) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . . . # .
                                . # # # #
                                . . . # .
                                . . . . .
                                `).showImage(0, 0)
                            radio.sendString("right")
                        }
                    } else {
                        quest_Note_5.quest_Show_String_For_Note_Small_Func(
                        "Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'"
                        )
                        error_Message_Func("2024-0212-1731", "Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'")
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "Following 0-Reset to Allow Idle/Stop Afterwards"
                        )
                        controller__Polar_OriginAtCenter__IdleCount_Int = 0
                        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    }
                    if (false) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
                        )
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
                        )
                    }
                }
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Avoid sending 'stop' to not interfere.. "
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "..turbo-max-motion buttons pressed"
                )
                if (controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int <= controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                    controller__Polar_OriginAtCenter__IdleCount_Int += 1
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Avoid sending 'stop' after above threshold-max,.."
                    )
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "..to not flood Led-5x5 and Network"
                    )
                    if (controller__Polar_OriginAtCenter__IdleCount_Int < 5) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                `).showImage(0, 0)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Zero values if not exceed 'Deadzone_AsIdle'"
                            )
                            radio.sendString("stop")
                            serial.writeString("*** B: STOP" + "")
                        }
                    }
                } else {
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                }
            }
            if (true) {
                quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(20, quest_Time_Units_Enum.Milliseconds)
            }
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes ~ Yes: 1-Sec Lag 'show leds'"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Activate Stack via 'Forever' Stack_Header"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 1of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 2of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
                images.createImage(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("forward_turbo")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                }
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
                images.createImage(`
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("backward_turbo")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                }
            } else if (false) {
                quest_Note_4.quest_Show_String_For_Note_Small_Func(
                "Deactivate for now"
                )
                images.createImage(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("left_turbo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following 0-Reset to Allow Idle/Stop Afterwards"
                )
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
            } else if (false) {
                quest_Note_4.quest_Show_String_For_Note_Small_Func(
                "Deactivate for now"
                )
                images.createImage(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("right_turbo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following 0-Reset to Allow Idle/Stop Afterwards"
                )
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2026 Quest Institute. All rights reserved."
    )
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 2of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            let controller__Button_TriggerDelay__MSEC_INT = 0
            if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
                images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . # . # .
                    # . . . #
                    `).showImage(0, 0)
                radio.sendString("arm_000__down")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(controller__Button_TriggerDelay__MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                }
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
                images.createImage(`
                    # . . . #
                    . # . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).showImage(0, 0)
                radio.sendString("arm_045__up_half")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(controller__Button_TriggerDelay__MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                }
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
basic.forever(function () {
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
    "Network-Cycle Management Stack"
    )
    if (false) {
        serial.writeString("*** A:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        controller__Polar_OriginAtCenter__MagnitudePixel__Int,
        8,
        2
        ) + "|" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        controller__Polar_OriginAtCenter__IdleCount_Int,
        8,
        2
        ) + "|" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int,
        8,
        2
        ) + "|" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT,
        8,
        2
        ) + "|")
    }
    if (false) {
        serial.writeLine("*** C: " + "Joy_X:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        joystickbit.getRockerValue(joystickbit.rockerType.X),
        8,
        2
        ) + " Joy_Y:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        joystickbit.getRockerValue(joystickbit.rockerType.Y),
        8,
        2
        ))
    }
    if (true) {
        network__CpuCycle_Post__Management_Func()
quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "See if this will slow down to column-align serial-prints"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "See if this will slow down to column-align serial-prints"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "20ms (min standard), 100ms, 10000ms (noticably slower, 1sec, but no help)"
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(20, quest_Time_Units_Enum.Milliseconds)
    }
    if (botModeInIdle_Fn()) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Avoid sending 'stop' to not interfere.. "
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "..turbo-max-motion & other user-inputs pressed"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Avoid sending 'stop' after above threshold-max,.."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "..to not flood Led-5x5 and Network"
        )
        if (controller__Polar_OriginAtCenter__IdleCount_Int % controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int == 0) {
            if (true) {
                images.createImage(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `).showImage(0, 0)
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Zero values if not exceed 'Deadzone_AsIdle'"
                )
                radio.sendString("stop")
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
                controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int += controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                serial.writeLine("*** B: STOP" + "")
            }
        }
        controller__Polar_OriginAtCenter__IdleCount_Int += 1
        if (false) {
            controller__Polar_OriginAtCenter__IdleCount_Int = 0
            if (controller__Polar_OriginAtCenter__IdleCount_Int % 5 == 0) {
                if (true) {
                    images.createImage(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `).showImage(0, 0)
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Zero values if not exceed 'Deadzone_AsIdle'"
                    )
                    radio.sendString("stop")
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    serial.writeString("*** B: STOP" + "")
                }
            }
        }
    }
})
basic.forever(function () {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    ""
    )
    if (false) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Error: Unknown Msg"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        0
        )
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "For now, all 4 corners = Error: Unknown Msg"
            )
            screen_IconMessage_Func("error")
        }
    }
})
loops.everyInterval(3600000, function () {
    quest_Note_6.quest_Show_String_For_Note_Small_Func(
    "This stack is practically a 'non-executing' stack that does not tie up cpu_resources with its 1 hour (3600,000)"
    )
    quest_Note_6.quest_Show_String_For_Note_Small_Func(
    "Also the 'if(false)' mini-stacks will be skipped by cpu, for further non-resource burdening"
    )
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Very Important Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Levels 1, 2, 2.1"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 1: Hardcoded Static via Actual_Numbers for MotorPower%"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2: Softcoded Dynamic via Variables/Constants for MotorPower% "
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2.1 Add Controller_Joystick * Level 2.2 Add Gear 3 (90%?)"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Basic Comment_Colors Usage:: Black: Very Big Picture, Blue: Big Picture, Green: Following Block_Code Moddable, Orange: Question/TODO, Magenta: Special Multi-Purpose "
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "micro:bit Ver2 Warning during Download is Ignorable Yet Courteously Helpful"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'if_then' mini-stacks useful for modular 3-D code select/duplicate/move/delete"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Light_Gray Functions non-editable (backend staff-use code only)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "For Group_CHannel_# (Bot_Id): Propose: 1-10 Staff Use, 11-99 Student Use"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "SW Reset: Long_Press Logo for 3 sec min"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Built-in Diagnostic Test: Short_Press Logo for 1 sec max"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Blocks' Window homes 'on start'_stack as top_left corner of editor_screen, until 'on start' is moved below, then next stack to right presides"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "All These Levels are Intermediate Level Coding due to Networking Pairing Involved.  Basic Diagnostic Servo_Motors (Autonomoous) is Beginner Level."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "This Intermediate Level Network_Pairing has 1sec_Lag Response Time; The Other Advanced Level Network_Pairing has Real_Time Response Time."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "For Level 1, can keep 'Forward: set manual_servo_motors' Block functional, yet reset to 0 all other 'set manual_servo_motors' Blocks for Discovery Learning"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "If duplicate stacks exist, then the highest stack is active and others are non_active"
        )
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Important Notes"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Upon open file, Editor zooms in on closest stack to right of original_origin from project_creation"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Semantic Naming prefers '_' vs. '-' since latter can be conufused with minus_sign"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'every 360000 ms' (1 hour) Stacks can be ignored, esp w/ 'if false' embedded"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Avoid using 'show leds' Block since will cause lag & degrade real-time response"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Seems like 'signficant' changes to JavaScript can activate 'format code', rearrange stacks to original position"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important 'system' variables are 1) _system_Hw_DeviceType__* (Hw=Hardware) and 2) _system_Sw_ModeState__* (Sw=Software)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If Buttons C-F for Gears/Misc, Maybe 'Logo Up/Down' for 'Servo_Arm Up/Down'"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Rotatedisplay' could be used on Bot's Led_Screen, but causes light flickering on bottom row, so maybe avoid"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
        )
        if (false) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Main upgrade from Lv1 to Lv2 is replacing cpu_laggy 'show leds' block with cpu_fast 'plox x _ y _' block, such as below: "
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "West"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(4, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "North"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 0)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "East"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 4)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "South"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(0, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Idle: Neutral"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 2)
            } else {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Lo"
                    )
                    led.plot(2, 3)
                } else {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Hi"
                    )
                    led.plot(2, 1)
                }
            }
        }
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Bug Resolved: TYJ"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "////jwc n may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at Blocks: on start stack: root level: error_Message_Func(\"2024-0212-1730\", convertToText(controller__Polar_OriginAtCenter__AngleDegree__Int))"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Fix: 'error_Message_Func(\"2024-0212-1730\", \"Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'\")'"
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "KINDLY IGNORE:: COMPILER ISSUE: NEED FOLLOING UNUSUAL VARIABLE DECLARATION BY COMPILER"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Always First Line of This 'on start' Stack by Compiler."
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Can Move Anywhere on Same Stack, But Needs to Stay Root Level (Main_Stack), e.g. Not Nested in Sub/Mini_Stack"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "* Current variable below is: 'controller__Polar_OriginAtCenter__AngleDegree__Int'"
                )
            }
        }
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "When activating a 'on Radio Received' stack, replace 'receivedString_TO_BE_REPLACED_BY_ONrADIOrECEIVED_STACK' with 'receivedString'"
        )
        if (false) {
            quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "Cpu-Cycle Delay: 20ms:: 115200-Y, 57600-Y, 38400-Y"
            )
            quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "Cpu-Cycle Delay: 20ms:: 14400-N, 28800-N, 31250-N "
            )
            serial.redirect(
            SerialPin.USB_TX,
            SerialPin.USB_RX,
            BaudRate.BaudRate115200
            )
        }
    }
})
