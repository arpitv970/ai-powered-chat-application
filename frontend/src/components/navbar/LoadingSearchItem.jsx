import {
    Avatar,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
} from '@chakra-ui/react';

const LoadingSearchItem = () => {
    return (
        <Stack>
            <div className='border border-primary rounded-xl flex justify-start items-start p-1 my-2 hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer'>
                <div className='mx-1 my-1'>
                    <SkeletonCircle size='10' />
                </div>
                <div className='mx-1 my-1 w-[100%]'>
                    <SkeletonText noOfLines={1} skeletonHeight='4'>
                        <p className='font-bold'>asdf</p>
                    </SkeletonText>
                    <SkeletonText mt={2} noOfLines={1} skeletonHeight='3'>
                        <p>asdf</p>
                    </SkeletonText>
                </div>
            </div>
            <div className='border border-primary rounded-xl flex justify-start items-start p-1 my-2 hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer'>
                <div className='mx-1 my-1'>
                    <SkeletonCircle size='10' />
                </div>
                <div className='mx-1 my-1 w-[100%]'>
                    <SkeletonText noOfLines={1} skeletonHeight='4'>
                        <p className='font-bold'>asdf</p>
                    </SkeletonText>
                    <SkeletonText mt={2} noOfLines={1} skeletonHeight='3'>
                        <p>asdf</p>
                    </SkeletonText>
                </div>
            </div>
            <div className='border border-primary rounded-xl flex justify-start items-start p-1 my-2 hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer'>
                <div className='mx-1 my-1'>
                    <SkeletonCircle size='10' />
                </div>
                <div className='mx-1 my-1 w-[100%]'>
                    <SkeletonText noOfLines={1} skeletonHeight='4'>
                        <p className='font-bold'>asdf</p>
                    </SkeletonText>
                    <SkeletonText mt={2} noOfLines={1} skeletonHeight='3'>
                        <p>asdf</p>
                    </SkeletonText>
                </div>
            </div>
        </Stack>
    );
};

export default LoadingSearchItem;
