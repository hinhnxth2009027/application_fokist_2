$('#number_form').validate({
    rules: {
        number: {
            required: true,
        },
        number_text: {
            required: true,
            minlength: 2
        },
        number_audio_fake: {
            required: true
        },
        number_range: {
            required: true
        }
    },
    messages: {
        number: {
            required: 'You cannot leave this field blank'
        },
        number_text: {
            required: 'You cannot leave this field blank'
        },
        number_audio_fake: {
            required: 'You cannot leave this field blank'
        },
        number_range: {
            required: 'You cannot leave this field blank'
        }
    }
})

$('#abcxyz').validate({
    rules: {
        text_letters: {
            required: true
        },
        letter_audio_fake: {
            required: true
        },
        number_range: {
            required: true
        }
    },
    messages: {
        text_letters: {
            required: 'You cannot leave this field blank'
        },
        letter_audio_fake: {
            required: 'You cannot leave this field blank'
        },
        number_range: {
            required: 'You cannot leave this field blank'
        }
    }
})


$('#animal_form').validate({
    rules: {
        animal_name:{
            required:true
        },
        animal_audio_fake: {
            required: true
        },
        animal_photo_fake: {
            required: true
        }
    },
    messages: {
        animal_name:{
            required:'You cannot leave this field blank'
        },
        animal_audio_fake: {
            required: 'You cannot leave this field blank'
        },
        animal_photo_fake: {
            required: 'You cannot leave this field blank'
        }
    }
})


$('#vegetable_form').validate({
    rules:{
        vegetable_name:{
            required:true
        },
        vegetable_photo_fake:{
            required:true
        },
        vegetable_audio_fake:{
            required:true
        }
    },
    messages:{
        vegetable_name:{
            required:'You cannot leave this field blank'
        },
        vegetable_photo_fake:{
            required:'You cannot leave this field blank'
        },
        vegetable_audio_fake:{
            required:'You cannot leave this field blank'
        }
    }
})

$('#color_form').validate({
    rules:{
        color_name:{
            required:true
        },
        color_code:{
            required:true
        },
        color_audio_fake:{
            required:true
        }
    },
    messages:{
        color_name:{
            required:'You cannot leave this field blank'
        },
        color_code:{
            required:'You cannot leave this field blank'
        },
        color_audio_fake:{
            required:'You cannot leave this field blank'
        }
    }
})