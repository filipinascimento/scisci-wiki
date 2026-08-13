# Metric family product versioning

## Summary

Metric family product versioning records when indicator families, variants, and formula changes enter official bibliometric products so later analyses know which scores were available under which definitions.

## Canonical Form

- Unit of analysis: metric product, data release, journal report, indicator family, or formula variant.
- Typical representation: release note, product date, metric availability flag, or versioned definition.
- Dataset target: preserve time-varying metric definitions and product coverage.
- Empirical signature: analyses can distinguish old rankings from later product versions that add or alter indicators.

## Uses in Science of Science

- Complements [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Records product integration context for [WoS analytics product integrations](wos_analytics_product_integrations.md).
- Links metric availability to [citation data census dates](../methods/citation_data_census_dates.md).
- Preserves historical context for [Eigenfactor public metric workbench](eigenfactor_public_metric_workbench.md).

## Operationalization

- Record metric family, formula variant, product, provider, release date, and data vintage.
- Keep old definitions and outputs rather than overwriting them.
- Mark analyses with the metric version actually used.
- Track newly added variants such as five-year windows or self-citation exclusions.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) uses 2006 Journal Citation Reports data for Eigenfactor rankings.
- The paper notes that Journal Citation Reports later included Eigenfactor metrics as product indicators.
- The same notes document additional impact-factor variants, including five-year and self-citation-omitting versions, showing why product versions matter.

## Caveats

- Product histories can be hard to reconstruct after provider interfaces change.
- Versioning should include both formula changes and coverage changes.
- Product version availability is not equivalent to methodological validity.

## Links

- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [WoS analytics product integrations](wos_analytics_product_integrations.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [Eigenfactor public metric workbench](eigenfactor_public_metric_workbench.md)
- [journal self-citation unit boundary](../validations/journal_self_citation_unit_boundary.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `metric_family_product_versioning`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: metric product versioning; indicator-family release history; bibliometric product vintage
