function initialize(config, onResult, onError) {
    try {
        IMP.init(config["accountId"]);

        onResult();    
    } catch (error) {
        onError(error);
    }
}

function requestPayment(gateway, product, orderId, billingId, billingInfo, onResult, onError) {
    IMP.request_pay({
        "pg": gateway["provider"],
        "pay_method": gateway["method"],
        "merchant_uid": orderId,
        "customer_uid": billingId,
        "name": product["title"], //'주문명:결제테스트',
        "amount": product["price"], //14000,
        "buyer_email": billingInfo["email"], //'iamport@siot.do',
        "buyer_name": billingInfo["name"], //'구매자이름',
        "buyer_tel": billingInfo["phone-number"], //'010-1234-5678',
        "buyer_addr": billingInfo["address"], //'서울특별시 강남구 삼성동',
        "buyer_postcode": billingInfo["postcode"], // '123-456'
    }, function(response) {
        if (response.success) {
            onResult({
                "transaction-id": response.imp_uid,
                "order-id": response.merchant_uid,
                "approval-number": response.apply_num
            });
        } else {
            onError({
                "message": rsp.error_msg
            });
        }
    });
}
