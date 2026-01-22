import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { colors } from "@/theme"

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
    icon?: React.ReactNode;
    styleProps?: StyleProps;
}

interface StyleProps {
    paddingVertical?: number;
    marginTop?: number;
}

export const Button = ({title, onPress, variant = 'primary', icon, styleProps}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[getStyle(variant, styleProps)]}
            onPress={onPress}
        >
            {icon && icon}
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}

function getStyle(variant: string, styleProps?: StyleProps) {
    switch (variant) {
        case 'primary':
            return {
                backgroundColor: colors.white,
                paddingVertical: styleProps?.paddingVertical ?? 12,
                paddingHorizontal: 16,
                borderRadius: 8,
                marginTop: styleProps?.marginTop ?? 0,
                flexDirection: "row" as const,
                alignItems: "center" as const,
                justifyContent: "center" as const,
            }
    }
}

const style = StyleSheet.create({
    text: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular'
    }
})