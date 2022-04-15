
import React, { useSelector, useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; //Importamos el npm
// import {useStateValue} from '../../StateProvider';
import { TotalPrice } from '../../redux/reducers/cartReducer';

export default function PayPal() {
    const total = useSelector(state => state.cartReducer.total)
    //traemos la info de nuestro carrito de compra
    // const [{basket},dispatch] = useStateValue(); 
    const [success, setSuccess] = useState(false);
    const [orderID, setOrderID] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");

    console.log(1, orderID);
    console.log(2, success);
    console.log(3, ErrorMessage);

    useEffect(() => {

        PayPalCheckOut()//LLamo al cdn de PayPal cada vez que cambia el carrito

    }, [total]);

    const initialOptions = { // Genero las opciones para enviarle al CDN
        "client-id": "AegrAG5_qrQDSRzdsr4tM7eACx4QDEMTveld45ivresfAlkpniCAPTVRxRr7FyzbAaaPp2-ZzbpmZmR9",
        currency: "USD", //Establesco la moneda
        intent: "capture", //Estableco el metodos este autoriza la operacion y captura los fondos

    };
    let productsId = total.map(items => items.id)
    console.log(productsId)
    const createOrder = (data, actions) => {
        //Creo la orden de con los datos, esta puede ser general o con detalle de items
        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                    description: "items",
                    amount: {
                        value: TotalPrice(total),
                    },

                },


            ],

            /* purchase_units: [{
                        reference_id: "PUHF",
                        description: "Sporting Goods",
        
                        custom_id: "CUST-HighFashions",
                        soft_descriptor: "HighFashions",
                        amount: {
                            currency_code: "USD",
                            value: "230.00",
                            breakdown: {
                                item_total: {
                                    currency_code: "USD",
                                    value: "180.00"
                                },
                                shipping: {
                                    currency_code: "USD",
                                    value: "30.00"
                                },
                                handling: {
                                    currency_code: "USD",
                                    value: "10.00"
                                },
                                tax_total: {
                                    currency_code: "USD",
                                    value: "20.00"
                                },
                                shipping_discount: {
                                    currency_code: "USD",
                                    value: "10"
                                }
                            }
                        },
                        items: [{
                            name: "T-Shirt",
                            description: "Green XL",
                            sku: "sku01",
                            unit_amount: {
                                 currency_code: "USD",
                                 value: "90.00"
                            },
                            tax: {
                                currency_code: "USD",
                                value: "10.00"
                            },
                            quantity: "1",
                            category: "PHYSICAL_GOODS"
                        },
                            {
                            name: "Shoes",
                            description: "Running, Size 10.5",
                            sku: "sku02",
                            unit_amount: {
                                 currency_code: "USD",
                                 value: "45.00"
                            },
                            tax: {
                                currency_code: "USD",
                                value: "5.00"
                            },
                            quantity: "2",
                            category: "PHYSICAL_GOODS"
                        }
                        ],
                        shipping: {
                            method: "United States Postal Service",
                            address: {
                                name: {
                                    full_name: "John",
                                    surname: "Doe"
                                },
                                address_line_1: "123 Townsend St",
                                address_line_2: "Floor 6",
                                admin_area_2: "San Francisco",
                                admin_area_1: "CA",
                                postal_code: "94107",
                                country_code: "US"
                            }
                        }
                    }]
                    */
        });
    };
    const onApprove = (data, actions) => { //recibo el resultado de mi operacion
        console.log(data)
        return actions.order.capture()
            .then(function (details) {
                const { payer } = details;
                setSuccess(true);
                console.log('Capture result', details, JSON.stringify(details, null, 2)); //veo los datos en consola
                var transaction = details.purchase_units[0].payments.captures[0];
                alert('Transaction ' + transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
                console.log(details)
                setOrderID(transaction.id)
            });
    };
    const onCancel = (data) => {
        console.log('You have cancelled the payment!', data);
    }

    const onError = (data, actions) => { //Capturo error en caso de que exista
        setErrorMessage("An Error occured with your payment ");
    };

    const PayPalCheckOut = () => {
        return (
            <PayPalScriptProvider options={initialOptions}> {/*Inicializo el CDN*/}

                {/*Inicializo los botones*/}
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    onCancel={onCancel}
                />
            </PayPalScriptProvider>
        )
    }
    return (
        <PayPalCheckOut />
    );
}
