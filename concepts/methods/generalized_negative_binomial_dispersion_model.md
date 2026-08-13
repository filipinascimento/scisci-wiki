# Generalized negative-binomial dispersion model

## Summary

A generalized negative-binomial model can estimate citation mean and dispersion separately, making novelty's risk profile explicit.

## Canonical Form

- Unit of analysis: paper citation count, novelty class, mean equation, or dispersion equation.
- Typical representation: generalized negative-binomial model with novelty terms in mean and dispersion components.
- Mechanism, measurement, or validation target: separate mean and variance effects of novelty on citations.
- Empirical signature: novelty classes show different expected citations and different dispersion parameters..

## Uses in Science of Science

- Adds a model form to [novelty impact dispersion](../measures/novelty_impact_dispersion.md).
- Useful for expressing high-risk/high-gain novelty as variance rather than only mean impact.
- Connects novelty evaluation to [citation distribution scaling](../measures/citation_distribution_scaling.md).

## Operationalization

- Fit a generalized negative-binomial citation model with novelty class in both mean and dispersion equations.
- Report implied variance as well as expected citations.
- Document field-size exclusions, exposure windows, and robustness to percentile outcomes.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2017) reports separate mean and dispersion estimates for novelty classes using generalized negative-binomial models.
- This supports modeling novelty risk explicitly.

## Caveats

- The model's dispersion assumptions and field-size exclusions must be reported.
- Citation counts can have additional zero inflation, field heterogeneity, and database artifacts.

## Links

- [Novelty impact dispersion](../measures/novelty_impact_dispersion.md)
- [Novel research low-citation tail](../validations/novel_research_low_citation_tail.md)
- [Citation distribution scaling](../measures/citation_distribution_scaling.md)
- [Overdispersed citation-breadth count model](overdispersed_citation_breadth_count_model.md)
- [Citation percentile indicators](../measures/citation_percentile_indicators.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `generalized_negative_binomial_dispersion_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: generalized NB novelty model; novelty citation dispersion model; negative-binomial mean-dispersion model
