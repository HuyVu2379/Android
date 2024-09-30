import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Screen4 = () => {
    return (
        <View style={styles.container}>
            {/* Section 1 */}
            <View style={styles.section1}>
                {/* Product Card */}
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Image source={require('./assets/book.png')} />
                        <View style={[styles.productInfo, { gap: 5 }]}>
                            <Text style={styles.boldText}>Nguyên hàm tích phân và ứng dụng</Text>
                            <Text style={styles.boldText}>Cung cấp bởi Tiki Trading</Text>
                            <Text style={[styles.redText, styles.boldText]}>141.800 đ</Text>
                            <Text style={[styles.strikethroughText, styles.boldText]}>141.800 đ</Text>
                            <View style={[styles.qualityControl, styles.productInfo]}>
                                <View style={styles.qualityControl}>
                                    <FontAwesome style={styles.button} name="minus" />
                                    <Text style={styles.boldText}>1</Text>
                                    <FontAwesome style={styles.button} name="plus" />
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.link}>Mua sau</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Discount Code Section */}
                    <View style={[styles.qualityControl, { paddingLeft: 10, gap: 20 }]}>
                        <Text style={styles.boldText}>Mã giảm giá đã lưu</Text>
                        <TouchableOpacity>
                            <Text style={styles.link}>Xem tại đây</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Discount Apply Section */}
                    <View style={styles.row}>
                        <View style={styles.discountContainer}>
                            <View style={styles.discountBox}></View>
                            <Text style={styles.boldText}>Mã giảm giá</Text>
                        </View>
                        <TouchableOpacity style={styles.applyButton}>
                            <Text style={styles.whiteText}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Voucher Section */}
                <View style={[styles.row, { backgroundColor: 'white', paddingVertical: 15 }]}>
                    <Text style={styles.boldText}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Nhập tại đây?</Text>
                    </TouchableOpacity>
                </View>

                {/* Temporary Total Section */}
                <View style={[styles.row, { backgroundColor: 'white', paddingVertical: 15 }]}>
                    <Text style={styles.textForPrice}>Tạm tính</Text>
                    <Text style={[styles.textForPrice, { color: 'red' }]}>141.800 đ</Text>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.row}>
                    <Text style={[styles.textForPrice, { color: 'grey' }]}>Thành tiền</Text>
                    <Text style={[styles.textForPrice, { color: 'red' }]}>141.800 đ</Text>
                </View>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.whiteText}>Tiến hành đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#C4C4C4',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 10,
    },
    boldText: {
        fontWeight: '600',
    },
    whiteText: {
        color: 'white',
        fontWeight: 'bold',
    },
    link: {
        color: '#0A5EB7',
        textDecorationLine: 'none',
        fontWeight: '500'
    },

    // Section 1 specific styles
    section1: {
        gap: 20,
    },
    card: {
        backgroundColor: 'white',
        paddingVertical: 20,
        gap: 20,
    },
    productInfo: {
        justifyContent: 'space-between',
    },
    redText: {
        color: "red",
    },
    strikethroughText: {
        textDecorationLine: 'line-through',
    },
    qualityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    button: {
        padding: 3,
        backgroundColor: '#C4C4C4',
    },

    // Discount section specific styles
    discountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingLeft: 10,
        height: 40,
        width: '50%',
        borderColor: 'black',
        borderWidth: 1,
    },
    discountBox: {
        height: 20,
        width: 40,
        backgroundColor: "yellow",
    },
    applyButton: {
        height: 40,
        width: '40%',
        backgroundColor: '#0A5EB7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Footer specific styles
    footer: {
        backgroundColor: 'white',
        paddingVertical: 20,
        gap: 15
    },
    orderButton: {
        backgroundColor: 'red',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    textForPrice: {
        fontWeight: "600",
        fontSize: 20
    }
});

export default Screen4;
