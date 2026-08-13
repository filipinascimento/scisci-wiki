# Funding threshold saturation mechanism

## Summary

Funding threshold saturation mechanism is the motif that above a per-researcher funding floor, additional national R&D spending may not translate into higher average citation impact.

## Canonical Form

- Unit of analysis: country, R&D spending per researcher, mean citation impact, funding threshold, or saturation regime.
- Typical representation: threshold effect, plateau, above-threshold scatter, per-researcher funding floor, or marginal impact saturation.
- Mechanism target: explain why research capacity may require sufficient funding but not show linear average-impact gains above the threshold.
- Empirical signature: below-threshold countries show constrained impact, while above-threshold countries vary widely without monotonic gains.

## Uses in Science of Science

- Mechanistically interprets [R&D spending per researcher threshold](../measures/rd_spending_per_researcher_threshold.md).
- Complements [national research output-funding scaling](../measures/national_research_output_funding_scaling.md).
- Connects national input measures to [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Fit piecewise, spline, or threshold models of mean citation impact against R&D spending per researcher.
- Separate total-output scaling from average-impact saturation.
- Test sensitivity to country coverage, field mix, and PPP conversion.
- Compare below-threshold slope with above-threshold plateau or scatter.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) reports that total national research impact grows with R&D expenditure while average impact shows a threshold-like pattern with high-spending countries scattered above the threshold.
- The paper interprets adequate per-researcher funding as a condition but not a guarantee for higher average impact.

## Caveats

- The interpretation is ecological and country-level.
- Average citation impact is shaped by field mix, language, collaboration, and database coverage.
- Threshold location can depend on model form and country sample.

## Links

- [R&D spending per researcher threshold](../measures/rd_spending_per_researcher_threshold.md)
- [national research output-funding scaling](../measures/national_research_output_funding_scaling.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [World Bank R&D capacity coverage intersection](../datasets/world_bank_rd_capacity_coverage_intersection.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `funding_threshold_saturation_mechanism`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: R&D funding saturation; per-researcher funding threshold mechanism; national impact funding plateau
