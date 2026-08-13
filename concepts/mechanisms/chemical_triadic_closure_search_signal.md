# Chemical triadic-closure search signal

## Summary

Chemical triadic-closure search signal is the pattern that novel chemical relationships often connect chemicals already separated by two steps in the prior knowledge network.

## Canonical Form

- Unit of analysis: chemical pair, candidate experiment, knowledge-network edge, or year.
- Typical representation: candidate edge classified by whether it closes an open triangle in the chemical relationship network.
- Mechanism: scientists search locally around known relationships, extending familiar neighborhoods.
- Empirical signature: observed new relationships overrepresent distance-two pairs relative to all possible new pairs.

## Uses in Science of Science

- Provides a domain-specific version of [triadic closure in collaboration](triadic_closure_in_collaboration.md) for knowledge content.
- Supports [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md).
- Helps interpret [knowledge-network experiment search](knowledge_network_experiment_search.md) as local graph exploration.
- Can be estimated alongside degree and distance in [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md).

## Operationalization

- Construct the cumulative chemical relationship network before each observation window.
- Identify candidate pairs at shortest-path distance two.
- Count the share of observed new relationships that close these open triads.
- Compare to opportunity-set baselines that preserve degree, component structure, or available candidate pairs.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) shows that scientists prefer chemical pairs that are close in the prior knowledge network.
- The paper's distance-based models imply a strong local-search signal, including choices that close short paths between already related entities.
- The same local tendency helps explain why historical search is efficient early but can become too conservative as the network matures.

## Caveats

- Triadic closure can reflect genuine mechanistic plausibility rather than only conservatism.
- Chemical entity extraction and relationship persistence assumptions affect the count of open triads.
- Distance-two preference should be interpreted relative to the changing opportunity denominator.

## Links

- [knowledge-network experiment search](knowledge_network_experiment_search.md)
- [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [triadic closure in collaboration](triadic_closure_in_collaboration.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `chemical_triadic_closure_search_signal`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: chemical local search closure; distance-two experiment choice; knowledge-network triadic closure
