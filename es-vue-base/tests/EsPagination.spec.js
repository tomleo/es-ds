import { mount } from '@vue/test-utils';
import EsPagination from '@/src/lib-components/EsPagination.vue';
import jestVue from '@/tests/jest.vue.config';

describe('EsPagination', () => {
    test('<EsPagination />', async () => {
        const TestComponent = {
            components: {
                EsPagination,
            },
            template: `
                <div>
                    <ul id="paginated-list">
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                    <EsPagination
                    v-model="currentPage"
                    :total-rows="2"
                    :per-page="1"
                    listId="paginated-list" />
                </div>
            `,
            data() {
                return {
                    currentPage: 1,
                };
            },
        };

        const wrapper = mount(TestComponent, {
            ...jestVue,
        });
        const a11y = await axe(wrapper.element);

        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.html()).toMatchSnapshot();
        expect(a11y).toHaveNoViolations();
    });
});
