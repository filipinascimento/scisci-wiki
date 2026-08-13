# Topological cognitive-distance proxy

## Summary

Topological cognitive-distance proxy measures the cognitive distance of a candidate experiment by the shortest-path distance or disconnectedness between entities in a prior knowledge network.

## Canonical Form

- Unit of analysis: candidate entity pair, chemical pair, concept pair, experiment, or knowledge-network edge.
- Typical measure: graph distance before the candidate edge is observed, including a special category for disconnected components.
- Measurement target: how far a proposed combination is from existing connected knowledge.
- Empirical signature: scientists disproportionately choose nearby or central pairs compared with the available opportunity set.

## Uses in Science of Science

- Refines the distance component of [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md).
- Operationalizes risk in [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md).
- Connects graph distance to broader [category disparity](category_disparity.md) and novelty measures.
- Helps identify conservative versus exploratory problem-choice strategies.

## Operationalization

- Build the cumulative knowledge network before each focal experiment.
- For each possible entity pair, compute shortest-path distance if connected.
- Mark pairs in different connected components as disconnected or assign a separate bridge category.
- Estimate how observed choices weight degree, distance, and disconnectedness relative to available opportunities.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) models biomedical experiment choice using chemical-pair distance in a knowledge network.
- The paper distinguishes nearby chemical pairs from distant or disconnected pairs and shows that observed scientists prefer central and nearby opportunities.
- Counterfactual simulations indicate that more distant or disconnected choices can improve collective discovery under some coverage conditions.

## Caveats

- Graph distance is a proxy for cognitive distance, not a direct measure of researcher understanding.
- Entity extraction and relation coding affect the topology.
- Distant combinations can be infeasible, expensive, or theoretically unmotivated even when they are topologically attractive.

## Links

- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [category disparity](category_disparity.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `topological_cognitive_distance_proxy`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: graph-distance cognitive distance; knowledge-network distance proxy; topological novelty distance
