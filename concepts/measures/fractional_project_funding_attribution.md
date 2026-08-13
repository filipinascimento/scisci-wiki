# Fractional project-funding attribution

## Summary

Fractional project-funding attribution records the percentage of a focal research project's budget supplied by each funding source instead of assigning the project to one acknowledged grant or funder.

## Canonical Form

- Unit of analysis: project, publication, funding source, survey response, budget share, or funding model.
- Typical representation: vector of funding-source percentages that sum to the project budget.
- Measurement target: mixed exposure to internal block funds, competitive grants, noncompetitive public funds, firm funds, donations, and other sources.
- Empirical signature: a paper-linked project can be analyzed with both source-specific shares and derived indicators such as competitive-funding ratio.

## Uses in Science of Science

- Extends [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md) from a data-linking design into a reusable measurement motif.
- Supplies inputs for [competitive-funding share thresholds](competitive_funding_share_threshold.md), [funding definition sensitivity](../validations/funding_definition_sensitivity.md), and [funding model status contingency](../mechanisms/funding_model_status_contingency.md).
- Helps correct the limitation of [funding acknowledgments](../datasets/funding_acknowledgments.md), which often miss block funding and can attach grants only loosely related to the focal work.
- Supports policy comparisons where projects are funded by blended institutional, public, and private sources.

## Operationalization

- Ask a knowledgeable project respondent to allocate approximate project funding percentages across a documented source taxonomy.
- Preserve each source share before deriving binary funding-model indicators.
- Aggregate source shares into analytic contrasts, such as internal block funds versus competitive project grants, while keeping the original shares for robustness checks.
- Validate whether the source categories match the policy question, because some nominally competitive programs may be more or less selective than others.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) asks respondents to report approximate percentages of project funding from internal funds, center grants, competitive government grants, noncompetitive grants, local and foreign governments, firm sources, donations, foundations, and other sources.
- The paper emphasizes that this design improves on binary funding acknowledgments because it can capture block funding and fractional attribution across multiple sources.
- Wang et al. use these shares to construct both a 25-percent competitive-funding dummy and a continuous ratio of competitive funds.
- The appendix gives detailed instructions for classifying funds tied to specific research subjects versus flexible institutional funds.

## Caveats

- Survey-reported funding shares can suffer from recall error, category ambiguity, and respondent interpretation differences.
- Percentages describe funding exposure, not necessarily which money paid for each marginal activity within the project.
- Funding-source taxonomies are country-specific and should not be transferred without mapping local funding institutions.

## Links

- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [competitive-funding share threshold](competitive_funding_share_threshold.md)
- [funding definition sensitivity](../validations/funding_definition_sensitivity.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [block-funding novelty buffer](../mechanisms/block_funding_novelty_buffer.md)
- [funding acknowledgments](../datasets/funding_acknowledgments.md)
- [responsible metrics](responsible_metrics.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `fractional_project_funding_attribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: funding-source percentage vector; project budget share attribution; fractional funding-source measure; mixed project funding shares
