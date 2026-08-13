# Policy-Mention Time-Area Normalization

## Summary

Policy-mention time-area normalization is a method for normalizing policy mentions by publication time and research area before evaluating broad entities such as institutions or groups.

## Canonical Form

- Unit of analysis: paper, field, institution, research group, publication year, or policy-document corpus.
- Typical representation: expected policy-mention baseline stratified by time and area.
- Method target: compare policy attention across entities with different temporal and topical portfolios.
- Empirical signature: raw policy mentions change when adjusted for age and area-specific policy-document focus.

## Uses in Science of Science

- Combines [policy mention time lag](../measures/policy_mention_time_lag.md) with [policy subject-category concentration](../measures/policy_subject_category_concentration.md).
- Extends [policy mention enrichment profiles](policy_mention_enrichment_profiles.md).
- Adapts principles from [field-normalized citation impact](../measures/field_normalized_citation_impact.md).
- Supports [target-oriented impact metrics](../measures/target_oriented_impact_metrics.md).

## Operationalization

- Estimate expected policy mentions by publication year or age.
- Estimate expected mentions by research area, topic, or subject category.
- Compute normalized policy attention for entities with mixed time and area portfolios.
- Report denominators and source-list coverage before using normalized scores for evaluation.

## Evidence and Validations

- Verified full-text evidence from Bornmann et al. (2016) states that mentions in policy documents are time-dependent.
- The paper notes that policy documents focus differently on research areas.
- Bornmann et al. argue that time- and area-specific normalization is needed when evaluating entities with broad outputs.

## Caveats

- Policy-document corpora can be sparse, making normalization unstable.
- Area definitions can encode coverage bias or political priorities.
- Normalized scores still need context audits because mentions have different functions.

## Links

- [policy mention time lag](../measures/policy_mention_time_lag.md)
- [policy subject-category concentration](../measures/policy_subject_category_concentration.md)
- [policy mention enrichment profiles](policy_mention_enrichment_profiles.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [target-oriented impact metrics](../measures/target_oriented_impact_metrics.md)
- [policy document mentions](../measures/policy_document_mentions.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; SciSciNet: unknown; WoS: unknown]

## Metadata

- Concept ID: `policy_mention_time_area_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Bornmann et al. (2016) (2016)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy mention normalization; time-area policy baseline; field-normalized policy mentions; age-area policy attention normalization
