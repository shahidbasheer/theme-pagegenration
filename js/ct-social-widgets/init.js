jQuery(document).ready(function($){

    $('.socialFirst').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['twitter', 'facebook', 'instagram', 'pinterest', 'vkontakte'],
        enabled: 'instagram',
        facebook: {
            account: 'KimKardashian',
            token: '123975213079|nqKWO89vVW4QH_bNmKH-Wiy3W0w', //app
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        twitter: {
            account: 'rihanna',
            consumer_key: 'cuqNqhHvl88iTXqTRUyuq4ax3',
            consumer_secret: 'qh7UH6cBHdw6a7PrA5v0DY5Ore8XiVt0TknBerBNf2tiUwpXzl',
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        instagram: {
            account: 'cristiano',
            client_id: 'dbc353b9585a4662b8ddc4f4c3aed788',
            disable: ['thumbnail', 'date', 'name'],
            limit: 10
        },
        pinterest: {
            account: 'lookastic',
            disable: ['thumbnail', 'name']
        },
        vkontakte: {
            account: 1,
            disable: ['thumbnail', 'date', 'name']
        }
    });

    $('.socialSecond').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 320,
        available: ['twitter', 'facebook'],
        enabled: 'facebook',
        facebook: {
            account: 'DrGvGAestheticClinic',
            token: '123975213079|nqKWO89vVW4QH_bNmKH-Wiy3W0w', //app
            limit: 5,
            disable: ['thumbnail', 'date', 'name']
        },
        twitter: {
            account: 'drgvgaesthetic',
            consumer_key: 'KWzPriqY3pR4NsWnb3TBwIRxy',
            consumer_secret: 'UvRwZgJc4egbbC3vLBDbdBjgN4QGfYlhhFGSaS6S9BKXhw7JUc',
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        }
       
    });

    $('.socialThird').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 320,
        available: ['instagram', 'pinterest', 'vkontakte'],
        enabled: 'pinterest',
        //facebook: {
        //    account: 'LeoMessi',
        //    token: '123975213079|nqKWO89vVW4QH_bNmKH-Wiy3W0w', //app
        //    limit: 10,
        //    disable: ['thumbnail', 'date', 'name']
        //},
        //twitter: {
        //    account: 'kanyewest',
        //    consumer_key: 'cuqNqhHvl88iTXqTRUyuq4ax3',
        //    consumer_secret: 'qh7UH6cBHdw6a7PrA5v0DY5Ore8XiVt0TknBerBNf2tiUwpXzl',
        //    limit: 10,
        //    disable: ['thumbnail', 'date', 'name']
        //},
        instagram: {
            account: '_rl9',
            client_id: 'dbc353b9585a4662b8ddc4f4c3aed788',
            disable: ['thumbnail', 'date', 'name'],
            limit: 10
        },
        pinterest: {
            account: 'mcgregg1',
            disable: ['thumbnail', 'name']
        },
        vkontakte: {
            account: 112985556,
            disable: ['thumbnail', 'date', 'name']
        }
    });
    $('.socialFourth').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['facebook'],
        enabled: 'facebook',
        facebook: {
            account: 'DrGvGAestheticClinic',
            token: '445908602281988|WtcDRYQT5sRY7NPEtUV-vkoUdVM', //app
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        }
    });
    $('.socialFifth').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['twitter'],
        enabled: 'twitter',
        twitter: {
            account: 'rihanna',
            consumer_key: 'cuqNqhHvl88iTXqTRUyuq4ax3',
            consumer_secret: 'qh7UH6cBHdw6a7PrA5v0DY5Ore8XiVt0TknBerBNf2tiUwpXzl',
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        }
    });
    $('.socialSixth').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['instagram'],
        enabled: 'instagram',
        instagram: {
            account: 'katyperry',
            client_id: 'dbc353b9585a4662b8ddc4f4c3aed788',
            disable: ['thumbnail', 'date', 'name'],
            limit: 10
        }
    });
    $('.socialSeventh').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['pinterest'],
        enabled: 'pinterest',
        pinterest: {
            account: 'KlavesMarina',
            disable: ['thumbnail', 'name']
        }
    });
    $('.socialEighth').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['pinterest', 'instagram', 'facebook', 'twitter'],
        enabled: 'pinterest',
        facebook: {
            account: 'skrillex',
            token: '123975213079|nqKWO89vVW4QH_bNmKH-Wiy3W0w', //app
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        twitter: {
            account: 'taylorswift13',
            consumer_key: 'cuqNqhHvl88iTXqTRUyuq4ax3',
            consumer_secret: 'qh7UH6cBHdw6a7PrA5v0DY5Ore8XiVt0TknBerBNf2tiUwpXzl',
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        instagram: {
            account: 'shakira',
            client_id: 'dbc353b9585a4662b8ddc4f4c3aed788',
            disable: ['thumbnail', 'date', 'name'],
            limit: 10
        },
        pinterest: {
            account: 'KING__K',
            disable: ['thumbnail', 'name']
        }
    });
    $('.socialNinth').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['pinterest', 'instagram', 'facebook', 'twitter'],
        enabled: 'facebook',
        facebook: {
            account: 'skrillex',
            token: '123975213079|nqKWO89vVW4QH_bNmKH-Wiy3W0w', //app
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        twitter: {
            account: 'taylorswift13',
            consumer_key: 'cuqNqhHvl88iTXqTRUyuq4ax3',
            consumer_secret: 'qh7UH6cBHdw6a7PrA5v0DY5Ore8XiVt0TknBerBNf2tiUwpXzl',
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        instagram: {
            account: 'shakira',
            client_id: 'dbc353b9585a4662b8ddc4f4c3aed788',
            disable: ['thumbnail', 'date', 'name'],
            limit: 10
        },
        pinterest: {
            account: 'KING__K',
            disable: ['thumbnail', 'name']
        }
    });
    $('.socialTenth').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['instagram', 'facebook', 'twitter', 'pinterest'],
        enabled: 'twitter',
        facebook: {
            account: 'skrillex',
            token: '123975213079|nqKWO89vVW4QH_bNmKH-Wiy3W0w', //app
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        twitter: {
            account: 'taylorswift13',
            consumer_key: 'cuqNqhHvl88iTXqTRUyuq4ax3',
            consumer_secret: 'qh7UH6cBHdw6a7PrA5v0DY5Ore8XiVt0TknBerBNf2tiUwpXzl',
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        instagram: {
            account: 'shakira',
            client_id: 'dbc353b9585a4662b8ddc4f4c3aed788',
            disable: ['thumbnail', 'date', 'name'],
            limit: 10
        },
        pinterest: {
            account: 'KING__K',
            disable: ['thumbnail', 'name']
        }
    });

    $('.socialEleventh').socialTimeLine({
        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['instagram', 'facebook', 'twitter', 'pinterest'],
        enabled: 'instagram',
        facebook: {
            account: 'skrillex',
            token: '123975213079|nqKWO89vVW4QH_bNmKH-Wiy3W0w', //app
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        twitter: {
            account: 'taylorswift13',
            consumer_key: 'cuqNqhHvl88iTXqTRUyuq4ax3',
            consumer_secret: 'qh7UH6cBHdw6a7PrA5v0DY5Ore8XiVt0TknBerBNf2tiUwpXzl',
            limit: 10,
            disable: ['thumbnail', 'date', 'name']
        },
        instagram: {
            account: 'shakira',
            client_id: 'dbc353b9585a4662b8ddc4f4c3aed788',
            disable: ['thumbnail', 'date', 'name'],
            limit: 10
        },
        pinterest: {
            account: 'KING__K',
            disable: ['thumbnail', 'name']
        }
    });
    $('.socialTwelfth').socialTimeLine({

        //enabled needs to have the same value which occurs in available
        width: 303,
        available: ['vkontakte'],
        enabled: 'vkontakte',
        vkontakte: {
            account: 112985556,
            disable: ['thumbnail', 'date', 'name']
        }
    });
});