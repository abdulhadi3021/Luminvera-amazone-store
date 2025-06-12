import { supabase } from '../lib/supabase';
import { CartItem } from '../types';

export const cartService = {
  async getCart(userId: string): Promise<CartItem[]> {
    const { data, error } = await supabase
      .from('cart_items')
      .select(`
        quantity,
        products (*)
      `)
      .eq('user_id', userId);
    
    if (error) throw error;
    return data || [];
  },

  async addToCart(userId: string, productId: string, quantity: number): Promise<void> {
    const { error } = await supabase
      .from('cart_items')
      .upsert({
        user_id: userId,
        product_id: productId,
        quantity
      });
    
    if (error) throw error;
  },

  async removeFromCart(userId: string, productId: string): Promise<void> {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', userId)
      .eq('product_id', productId);
    
    if (error) throw error;
  },

  async updateQuantity(userId: string, productId: string, quantity: number): Promise<void> {
    const { error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('user_id', userId)
      .eq('product_id', productId);
    
    if (error) throw error;
  }
};