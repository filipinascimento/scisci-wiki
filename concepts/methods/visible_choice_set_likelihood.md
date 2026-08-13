# Visible choice-set likelihood

## Summary

Visible choice-set likelihood estimates scientific strategy from time-varying opportunity sets by computing the likelihood of observed choices over candidate edges visible at each point in a growing knowledge network.

## Canonical Form

- Unit of analysis: candidate edge, observed experiment, time snapshot, entity pair, strategy parameter, or knowledge-network state.
- Typical representation: time-dependent choice probability, visible connectivity snapshot, edge-sequence likelihood, or model-fit objective.
- Method target: infer problem-choice strategy from the opportunity set available to scientists at the time of each observed choice.
- Empirical signature: likelihood is computed over observed sequences of selected edge sets, conditional on growing network visibility and strategy parameters.

## Uses in Science of Science

- Refines [degree-distance problem-choice models](degree_distance_problem_choice_model.md).
- Uses [biomedical chemical-relationship network panels](../datasets/biomedical_chemical_relationship_network_panel.md) as time-stamped opportunity sets.
- Supports [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md) and counterfactual strategy simulation.
- Helps separate observed choices from unavailable or not-yet-visible knowledge opportunities.

## Operationalization

- Construct time-dependent snapshots of entity connectivity in a growing knowledge network.
- Define candidate pairs visible at each time.
- Specify strategy parameters over degree, distance, or other edge features.
- Compute choice probabilities for observed edge sets given the visible snapshot.
- Maximize the likelihood of observed choices to estimate strategy parameters.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) states that parameter estimation used time-dependent snapshots of visible connectivity for each chemical in the growing chemical network.
- The authors compute time-dependent choice probabilities and then the full likelihood of selecting observed edge sets for experimentation.
- Parameter estimates are obtained by maximizing this likelihood with respect to strategy parameters.

## Caveats

- Visibility is inferred from the published network and may omit unpublished knowledge.
- Candidate sets can be very large and depend on entity extraction quality.
- Likelihood estimates inherit assumptions about which features scientists observe and value.

## Links

- [degree-distance problem-choice model](degree_distance_problem_choice_model.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [publication-success screening bias](../validations/publication_success_screening_bias.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `visible_choice_set_likelihood`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: time-dependent choice likelihood; visible opportunity-set likelihood; growing-network choice probability; scientific strategy likelihood
