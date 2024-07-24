import { ComponentProps } from 'react'

import {
  ProductSkeletonContainer,
  SkeletonItem,
} from '@/styles/pages/components/skeleton'

type ProductSkeletonProps = ComponentProps<typeof ProductSkeletonContainer>

export default function Skeleton({ ...props }: ProductSkeletonProps) {
  return (
    <ProductSkeletonContainer {...props}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
      </div>
    </ProductSkeletonContainer>
  )
}
