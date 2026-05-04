declare module '*.css';

declare module '@heroicons/react/24/outline' {
	import * as React from 'react';
    export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    export const XCircleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    export const XMarkIcon : React.FC<React.SVGProps<SVGSVGElement>>;
	const others: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> };
	export default others;
}