# Moderate novelty review premium

## Summary

Moderate novelty can receive better proposal evaluations even when extreme novelty is penalized.

## Canonical Form

- Unit of analysis: proposal, novelty percentile, review score, novelty quintile, or funding decision.
- Typical representation: nonlinear novelty-score curve separating moderate from right-tail novelty.
- Mechanism, measurement, or validation target: nonmonotonic review response to proposal novelty.
- Empirical signature: scores rise with modest novelty but fall for the most novel proposals.

## Uses in Science of Science

- Refines novelty evaluation mechanism by linking it to [proposal mesh novelty percentile](../measures/proposal_mesh_novelty_percentile.md) and [right tail novelty review discount](right_tail_novelty_review_discount.md).
- Useful as a reusable check when [novelty penalty](novelty_penalty.md) is used in science-of-science inference.
- Creates cross-links to [novelty conventionality](novelty_conventionality.md) so the motif is not interpreted in isolation.

## Operationalization

- Fit novelty quintiles, splines, or nonlinear terms instead of only one linear novelty coefficient.
- Compare low-to-middle novelty slopes with the fifth-quintile penalty.
- Separate moderate novelty rewards from extreme-novelty review discounts in allocation simulations.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports that scores increased with novelty at low levels while the negative relationship was driven by the most novel proposals.
- The pattern makes novelty evaluation nonmonotonic rather than uniformly negative.

## Caveats

- Proposal novelty is not randomized, so quality or feasibility can co-vary with novelty.
- The premium may depend on disease area, solicitation design, and score scale.

## Links

- [Proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [Right-tail novelty review discount](right_tail_novelty_review_discount.md)
- [Novelty penalty](novelty_penalty.md)
- [Novelty and conventionality](novelty_conventionality.md)
- [Distance-novelty additivity check](../validations/distance_novelty_additivity_check.md)
- [Novelty-underinvestment selection pathway](../consequences/novelty_underinvestment_selection_pathway.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `moderate_novelty_review_premium`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: moderate novelty reward; nonmonotonic novelty evaluation; acceptable novelty premium
