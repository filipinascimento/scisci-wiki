# Patent-citation timing popularity check

## Summary

Patent-citation timing popularity check tests whether papers directly cited by patents were already popular before the patent citation or became highly cited afterward.

## Canonical Form

- Unit of analysis: D=1 paper, patent application year, paper publication year, citation trajectory, or home-run status.
- Typical representation: citation-impact comparison by years between paper publication and patent application.
- Validation target: distinguish boundary impact premium from simple selection of already-famous papers.
- Empirical signature: papers cited by patents early in their life still become highly cited later.

## Uses in Science of Science

- Validates [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md).
- Connects impact results to [science-technology lag](../measures/science_technology_lag.md).
- Adds timing evidence to [citation impact indicators](../measures/citation_impact_indicators.md) when patents cite papers close to publication.

## Operationalization

- Identify papers directly cited by patents.
- Measure the time between paper publication and patent application.
- Compare subsequent paper citation impact across timing bins.
- Check whether early patent citations forecast later scientific impact.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) reports that D=1 patents did not simply cite already established popular papers.
- The supplement groups D=1 papers by the years between patent application and paper publication.
- It reports elevated home-run probability even when the patent cites the paper in the year the paper was published.

## Caveats

- Patent citation timing can depend on application delays and publication dates.
- Early patent citation does not prove that the patent caused later scientific impact.
- Timing checks should be paired with field-year normalization.

## Links

- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [science-technology distance](../measures/science_technology_distance.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; SciSciNet: W2743628650; WoS: unknown]

## Metadata

- Concept ID: `patent_citation_timing_popularity_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: patent timing popularity audit; early patent-citation impact check; boundary-paper prepopularity check; D1 paper timing validation
