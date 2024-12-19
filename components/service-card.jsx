import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const ServiceCard = ({ service }) => {
    return (
        <Card className='group cursor-default hover:border-accent transition-colors'>
            <CardContent className='pt-6 flex justify-center'>
                <service.icon className="w-16 h-16 group-hover:text-accent transition-colors" />
            </CardContent>
            <CardHeader className='pt-0 text-center'>
                <CardTitle className="group-hover:text-accent transition-colors">{service.title}</CardTitle>
                <CardDescription className="group-hover:text-foreground transition-colors overflow-hidden text-ellipsis line-clamp-4">{service.description}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default ServiceCard