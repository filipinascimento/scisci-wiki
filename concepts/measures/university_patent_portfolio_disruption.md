# University patent portfolio disruption

## Summary

University patent portfolio disruption aggregates patent-level disruption scores to characterize whether an institution's patent portfolio destabilizes or consolidates technological trajectories.

## Canonical Form

- Unit of analysis: university, year, patent portfolio, patent citation window, or aggregate disruption measure.
- Typical representation: average `CD5`, impact-scaled `mCD5`, total citations to destabilizing patents, and total citations to consolidating patents.
- Measurement target: organization-level direction and magnitude of patented technological change.
- Empirical signature: universities can have high-impact patent portfolios that differ in whether they destabilize or consolidate prior technology streams.

## Uses in Science of Science

- Extends [disruption index](disruption_index.md) and [modified CD index](modified_cd_index.md) from single patents to organizational portfolios.
- Supports analyses of Bayh-Dole, university technology transfer, and science-policy incentives.
- Provides the measurement substrate for [commercial engagement consolidation](../mechanisms/commercial_engagement_consolidation.md) and [federal funding destabilizing patents](../mechanisms/federal_funding_destabilizing_patents.md).
- Complements simple university patent volume and forward-citation impact measures.

## Operationalization

- Compute patent-level `CD5`, `mCD5`, and impact for each university patent.
- Aggregate by institution and year using average CD score, impact-scaled CD score, or separate counts for destabilizing and consolidating patent impact.
- Link portfolio outcomes to university funding, publication, industry-tie, and technology-transfer variables.
- Use fixed effects or comparable institutional controls when estimating organizational associations.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) studies U.S. utility patents issued to the 110 most research-intensive American universities.
- The paper analyzes 55,322 utility patents awarded to those universities between 1976 and 2010.
- Funk and Owen-Smith define four aggregate CD-based portfolio measures: average `CD5`, impact-scaled `mCD5`, total citations to destabilizing patents, and total citations to consolidating patents.
- They find that impact-scaled portfolio disruption provides clearer signal than simple average `CD5` for broad university patent portfolios.

## Caveats

- Portfolio aggregation can hide heterogeneity across departments, fields, technology classes, and patent families.
- Average disruption can be noisy when universities patent in many unrelated domains.
- University patenting is a selected subset of university science and should not be used as a complete measure of public research value.

## Links

- [disruption index](disruption_index.md)
- [modified CD index](modified_cd_index.md)
- [patent importance measure divergence](../validations/patent_importance_measure_divergence.md)
- [commercial engagement consolidation](../mechanisms/commercial_engagement_consolidation.md)
- [federal funding destabilizing patents](../mechanisms/federal_funding_destabilizing_patents.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [responsible metrics](responsible_metrics.md)
- [patent-paper links](../datasets/patent_paper_links.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown; SciSciNet: W2303284028]

## Metadata

- Concept ID: `university_patent_portfolio_disruption`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: university portfolio CD index; aggregate patent disruption; institutional patent disruption; university mCDscale
