# Project-level strategy labels

## Summary

Project-level strategy labels collapse a paper's multiple relationship-level strategy moves into a single repeat, new, or jump class for risk and reward analysis.

## Canonical Form

- Unit of analysis: paper, project, article strategy mixture, chemical relationship set, or publication outcome.
- Typical representation: repeat project, new project, jump project, or strategy-mixture vector.
- Method target: make project-level payoff comparisons possible when papers contain many relationship-level edges.
- Empirical signature: jump and new project classes have higher mean citations but plausibly lower success probabilities than repeat projects.

## Uses in Science of Science

- Converts [research strategy taxonomy](research_strategy_taxonomy.md) into project-level data for [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md).
- Links edge-level novelty to paper-level outcomes such as citations, high-impact status, and prizes.
- Helps distinguish fine-grained strategy mixtures from a simplified policy or evaluation class.
- Provides a template for labeling projects in other knowledge graphs, including patents, datasets, methods, or topic combinations.

## Operationalization

- Label all relationship edges in a paper using a knowledge-network strategy taxonomy.
- Assign repeat when the paper contains no new relationships or new entities.
- Assign new when the paper contains at least one new relationship but no new chemical.
- Assign jump when the paper introduces at least one new chemical entity.
- Preserve the full strategy mixture when possible, because the single label is a simplification.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) extends relationship-level strategy labels to project strategies for risk analysis.
- The paper defines repeat projects as having no new relationships or chemicals, new projects as having at least one new relationship but no new chemical, and jump projects as having at least one new chemical.
- Foster et al. use these project labels to compare mean citations and derive success-probability conditions for risk-neutral citation maximization.
- The project labels make the risk analysis possible because the expected reward calculation requires one strategy class per article.

## Caveats

- A single project label can hide mixed strategies inside one paper.
- The jump label depends on annotation coverage and whether a chemical is new to the observed corpus rather than new to all scientific knowledge.
- Project labels based only on published papers miss failed or abandoned projects.
- The simplified repeat/new/jump scheme may be too coarse for fields where methods, datasets, theories, or instruments are the primary novelty.

## Links

- [research strategy taxonomy](research_strategy_taxonomy.md)
- [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [strategy opportunity-bias model](strategy_opportunity_bias_model.md)
- [unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `project_level_strategy_labels`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: project strategy labels; article-level strategy class; repeat new jump projects; paper strategy classification
