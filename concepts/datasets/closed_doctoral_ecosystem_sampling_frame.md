# Closed doctoral ecosystem sampling frame

## Summary

A closed doctoral ecosystem sampling frame is a faculty-placement corpus where most faculty both earned doctorates from and hold faculty jobs inside the sampled set of PhD-granting units.

## Canonical Form

- Unit of analysis: field-specific doctoral department, faculty member, doctoral origin, or employing unit.
- Typical representation: faculty roster with doctorate-granting and employing institutions restricted to a mostly closed institutional set.
- Measurement target: coverage adequacy for faculty-flow, placement, and prestige-hierarchy analyses.
- Empirical signature: high shares of faculty doctorates and faculty jobs are observed within the same sampled doctoral ecosystem.

## Uses in Science of Science

- Acts as a sampling guardrail for [faculty hiring networks](../representations/faculty_hiring_networks.md).
- Helps determine when [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md) can be interpreted as a field-level hierarchy rather than a partial mobility sample.
- Supports concentration measures such as [faculty production inequality](../measures/faculty_production_inequality.md).
- Clarifies when external inflows and outflows should be modeled as missing career paths.

## Operationalization

- Enumerate departments or schools that grant doctorates in the target field.
- Collect faculty rosters and doctoral origins for those units.
- Report the fraction of current faculty whose doctorates came from sampled units and the fraction of sampled doctoral graduates who appear in faculty jobs.
- Treat foreign doctoral origins, industry placements, non-tenure-track positions, and missing doctorate metadata as explicit open-boundary categories.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) motivates the design by studying fields where North American PhD-granting units account for most of the relevant faculty-placement ecosystem.
- The paper uses this coverage condition to justify field-specific hiring networks in computer science, business, and history.
- Coverage checks matter because hierarchy, self-hiring, and placement concentration can be distorted when many doctoral origins or employing departments are unobserved.

## Caveats

- Closure is approximate and field-specific.
- A closed academic sample still excludes industry, government, teaching-only, international, and nonfaculty career paths.
- Strong closure for one field or time period does not transfer automatically to newer, smaller, or more international fields.

## Links

- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty roster panel](faculty_roster_panel.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; SciSciNet: W2102017123; WoS: unknown]

## Metadata

- Concept ID: `closed_doctoral_ecosystem_sampling_frame`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Clauset et al. (2015) (2015)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: closed faculty-placement frame; doctoral ecosystem coverage; closed PhD hiring sample
