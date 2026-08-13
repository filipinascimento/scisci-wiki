# Doctoral-production-rank attrition gradient

## Summary

The doctoral-production-rank attrition gradient is the tendency for faculty trained at lower-producing doctoral institutions to leave tenure-track faculty rosters at higher rates, increasing observed faculty-production inequality after hiring.

## Canonical Form

- Unit of analysis: faculty member, doctoral institution, production rank, field, domain, annual roster transition, or attrition event.
- Typical representation: attrition-risk curve by production rank, logistic regression coefficient, relative annual attrition ratio, or field-level significance table.
- Mechanism: differential retention transforms initial placement inequality into stronger cross-sectional inequality among sitting faculty.
- Empirical signature: faculty trained at institutions that produce fewer faculty have higher annual attrition risk than faculty trained at high-producing institutions.

## Uses in Science of Science

- Splits a rank-specific mechanism from broad [faculty retention and attrition](faculty_retention_attrition.md).
- Explains why [faculty production inequality](../measures/faculty_production_inequality.md) can be higher among existing faculty than among newly hired faculty.
- Supplies one group-specific attrition channel in [faculty hiring-attrition dynamic equilibrium](faculty_hiring_attrition_dynamic_equilibrium.md), because lower-producing doctoral origins can remain visible in hiring while leaving at elevated rates.
- Complements [faculty production scale amplification](../validations/faculty_production_scale_amplification.md), which checks aggregation-scale concentration separately from post-hiring attrition.
- Connects institutional training origin to [institutional prestige hierarchy](institutional_prestige_hierarchy.md), [prestige-constrained faculty mobility](prestige_constrained_faculty_mobility.md), and [faculty hiring networks](../representations/faculty_hiring_networks.md).

## Operationalization

- Rank doctoral institutions by the number or share of faculty they produce within a field, domain, or national system.
- Build annual faculty rosters and identify departures, retained faculty, and new hires.
- Model annual attrition risk as a function of doctoral-production rank, field/domain, faculty rank, cohort, and other available covariates.
- Compare Gini coefficients or production distributions for newly hired versus sitting faculty to detect post-hiring amplification.
- Report whether the gradient persists across fields and domains and whether it changes when self-hires or international doctorates are treated separately.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) computes domestic faculty-production Gini coefficients separately for newly hired faculty and existing faculty, finding larger inequalities for existing faculty in every field, every domain, and academia overall.
- Wapman et al. test the mechanism directly by modelling annual attrition risk as a function of faculty-production rank.
- The paper finds substantially higher attrition among faculty trained at lower-producing universities in academia overall, all eight domains, and 49 of 107 fields.
- Wapman et al. summarize the effect by noting that faculty outside the small set of high-producing universities are nearly twice as likely to leave the professoriate annually.
- This makes attrition an inequality-amplifying process rather than only a compositional outcome of initial hiring.
- Wapman et al. also use stable group proportions alongside this attrition gradient to argue for a [faculty hiring-attrition dynamic equilibrium](faculty_hiring_attrition_dynamic_equilibrium.md).

## Caveats

- Roster attrition can include retirement, moves to other sectors, moves outside the observed system, data loss, or administrative changes.
- Production rank is correlated with prestige, resources, geography, field mix, and candidate selection, so causal interpretation requires stronger designs.
- Higher attrition can reflect different opportunities or preferences, not only disadvantage.
- Field-specific rank definitions matter because a doctoral institution can be high-producing in one field and low-producing in another.

## Links

- [faculty retention and attrition](faculty_retention_attrition.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [faculty hiring-attrition dynamic equilibrium](faculty_hiring_attrition_dynamic_equilibrium.md)
- [faculty production scale amplification](../validations/faculty_production_scale_amplification.md)
- [faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [institutional prestige hierarchy](institutional_prestige_hierarchy.md)
- [prestige-constrained faculty mobility](prestige_constrained_faculty_mobility.md)
- [international-doctorate faculty attrition](international_doctorate_attrition.md)
- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `doctoral_production_rank_attrition_gradient`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: production-rank attrition; faculty attrition by doctoral producer rank; lower-producer attrition gradient; attrition-amplified production inequality
