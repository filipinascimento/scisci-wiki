# Famous-obscure pairing strategy

## Summary

Famous-obscure pairing strategy is the tendency to combine a highly central entity with a less central entity rather than pairing two obscure entities or two central ones.

## Canonical Form

- Unit of analysis: entity pair, chemical relationship, paper, patent, or search strategy.
- Typical representation: positive preference for the more central entity and negative preference for the less central entity.
- Mechanism: anchoring a risky or less familiar element to a central entity can make the problem easier to justify, interpret, publish, or patent.
- Empirical signature: observed choices overuse pairs with one high-degree and one lower-degree entity relative to available alternatives.

## Uses in Science of Science

- Refines [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md) by distinguishing high-degree anchors from lower-degree partners.
- Links [novelty and conventionality](novelty_conventionality.md) to a network-search pattern rather than only citation or journal-pair measures.
- Provides a mechanistic interpretation for parameters in [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md).
- Helps explain how conservative and exploratory elements can coexist inside one research choice.

## Operationalization

- In an evolving knowledge graph, compute the degree of both entities before the focal edge is observed.
- Label the larger degree as the central anchor and the smaller degree as the obscure or less central partner.
- Estimate whether observed choices favor high values of the anchor degree and low values of the partner degree.
- Compare with citations, prizes, failures, and search efficiency to test whether the strategy is individually or collectively rewarded.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) estimates a positive parameter for the more central chemical and a negative parameter for the less central chemical in MEDLINE article choices.
- The paper interprets this as a typical strategy of combining a relatively famous chemical with a more obscure one, conditional on opportunity.
- Rzhetsky et al. report that combinations of more and less central chemicals are associated with higher citations and scientific awards.
- The same pattern appears within a broader conservative strategy that prefers nearby relationships and rarely bridges disconnected components.

## Caveats

- Lower-degree entities are not necessarily conceptually obscure; they may be under-annotated, newer, or outside the chemical representation.
- Pairing central and obscure entities may reflect feasibility or assay availability as much as cognitive strategy.
- A high-reward pairing strategy for individuals can still be inefficient for collective network discovery.

## Links

- [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)
- [novelty and conventionality](novelty_conventionality.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown; SciSciNet: W2130145803]

## Metadata

- Concept ID: `famous_obscure_pairing_strategy`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: central-obscure pairing; famous chemical anchor; high-low degree pairing; central entity with obscure partner
