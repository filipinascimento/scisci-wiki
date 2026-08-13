# Single-edged success contagion

## Summary

Single-edged success contagion is the mechanism in which observed success increases future success probability, but absence of success does not independently increase future failure probability.

## Canonical Form

- Unit of analysis: paper, author, journal, word, institution, or other entity accumulating countable successes.
- Typical representation: success-only reinforcement, non-event failures, cumulative-advantage transition probability, or one-sided contagion process.
- Mechanism: attention, production, or use compounds after success while non-use leaves little trace in the process.
- Empirical signature: heavy-tailed outcomes with many low-success entities and a concentrated successful elite.

## Uses in Science of Science

- Refines [cumulative advantage](cumulative_advantage.md) by specifying why non-events should not always be modeled as negative reinforcement.
- Distinguishes Price's [cumulative-advantage urn model](../methods/cumulative_advantage_urn_model.md) from negative-binomial or double-contagion models.
- Helps interpret [attention inequality](attention_inequality.md), because low attention can arise from not receiving reinforcing events rather than from active penalties.
- Connects to [citation pull mechanism](citation_pull_mechanism.md), where prior citations draw later citations.

## Operationalization

- Identify whether the process records only successes, such as citations, publications, or library uses.
- Model transition probability as increasing with accumulated successes.
- Avoid treating missing citations, missing publications, or non-use as observed failures unless the data-generating process records them.
- Compare one-sided cumulative-advantage models with negative-binomial, lognormal, and fitness-plus-aging alternatives.
- Test whether adding explicit failure penalties improves prediction or only overfits low-count data.

## Evidence and Validations

- Verified full-text evidence from Price (1976) says the Polya urn rewards success with more success and punishes failure with more failure.
- Price argues that in many bibliometric settings failure is a non-event: lack of publication is not a recorded event in the way publication is.
- The paper therefore proposes a single-edged contagion process where success increases the chance of further success but failure does not change future probabilities.
- Price states that this distinction is a criterion for deciding whether negative-binomial or cumulative-advantage distributions should apply.
- The same reasoning supports bibliometric processes where only citations, publications, or uses enter the observable record.

## Caveats

- Some scholarly processes do record failures, such as rejected grants, failed replications, or unsuccessful applications.
- Absence of success can still have career consequences even when it is not an observed event in the bibliometric data.
- One-sided reinforcement does not identify whether quality, visibility, prestige, or search systems caused the initial success.

## Links

- [cumulative advantage](cumulative_advantage.md)
- [cumulative-advantage urn model](../methods/cumulative_advantage_urn_model.md)
- [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md)
- [preferential attachment](preferential_attachment.md)
- [attention inequality](attention_inequality.md)
- [citation pull mechanism](citation_pull_mechanism.md)
- [matthew effect](matthew_effect.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `single_edged_success_contagion`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: one-sided contagion; success-only reinforcement; non-event failure model; single-edged cumulative advantage
