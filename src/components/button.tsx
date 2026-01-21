import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { colors } from "@/theme"

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
    icon?: React.ReactNode;
}

export const Button = ({title, onPress, variant = 'primary', icon}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={getStyle(variant)}
            onPress={onPress}
        >
            {icon && icon}
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}

function getStyle(variant: string) {
    switch (variant) {
        case 'primary':
            return {
                backgroundColor: colors.white,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 8,
                flexDirection: "row" as const,
                alignItems: "center" as const,
            }
    }
}

const style = StyleSheet.create({
    text: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular'
    }
})