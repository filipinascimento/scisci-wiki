# Placement quality-production decoupling

## Summary

Placement quality-production decoupling separates how many faculty an institution produces from how prestigious the destinations of those placements are.

## Canonical Form

- Unit of analysis: doctoral institution, department, field, or placement cohort.
- Typical measure: production count paired with destination-rank distribution or mean placement prestige.
- Measurement target: whether an institution's prestige comes from placement quality, placement volume, or both.
- Empirical signature: some institutions produce few faculty but place them into highly ranked destinations, while others produce many faculty across lower-ranked destinations.

## Uses in Science of Science

- Refines [faculty production inequality](faculty_production_inequality.md) by separating quantity from destination quality.
- Helps interpret [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) as more than a size distribution.
- Supports audits of [upward faculty placement exceptions](../validations/upward_faculty_placement_exception_audit.md).
- Provides an institution-level feature for [faculty placement predictive validity](../validations/faculty_placement_predictive_validity.md).

## Operationalization

- For each doctoral institution, count placed faculty in the field.
- Compute destination-rank summaries such as median employer rank, mean employer prestige, upward-placement share, or top-destination share.
- Compare production volume to placement-quality summaries, ideally within field and cohort.
- Use null models that preserve production count to test whether destination quality exceeds what size alone would predict.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) notes that institutional rank is not identical to the number of faculty produced.
- The paper highlights cases where a smaller producer can rank highly because its graduates are placed into more prestigious departments.
- This motivates separate reporting of production inequality, placement hierarchy, and rank-change measures.

## Caveats

- Destination quality is usually derived from the same hiring network, so circularity should be reported.
- Sparse placement counts make quality summaries unstable for small departments.
- Destination prestige can reflect historical rank bias rather than individual candidate quality.

## Links

- [faculty production inequality](faculty_production_inequality.md)
- [faculty placement rank change](faculty_placement_rank_change.md)
- [faculty hierarchy strength](faculty_hierarchy_strength.md)
- [size-proportional placement null](../validations/size_proportional_placement_null.md)
- [upward faculty placement exception audit](../validations/upward_faculty_placement_exception_audit.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; SciSciNet: W2102017123; WoS: unknown]

## Metadata

- Concept ID: `placement_quality_production_decoupling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Clauset et al. (2015) (2015)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: placement quality versus volume; faculty production placement-quality split; prestige production decoupling
